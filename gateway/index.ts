
import { ApolloGateway, LocalGraphQLDataSource } from '@apollo/gateway';
import { buildFederatedSchema, ServiceDefinition } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import { importSchema } from 'graphql-import';
import path from 'path';

import { Resolvers, Todo, TodoItem } from './src/generated/graphql/todos';
import { TodoService } from './src/service/todo-service';
import { MockTodoService } from './src/service/mock-todo-service';

(async function() {

    const todosGQLService: ServiceDefinition = {
        name: 'todos',
        typeDefs: gql(await importSchema(path.join(__dirname, "../schema/todos.graphql"))),
    }

    const usersGQLService: ServiceDefinition = {
        name: 'users',
        typeDefs: gql(await importSchema(path.join(__dirname, "../schema/users.graphql"))),
    }

    const todoService: TodoService = new MockTodoService;

    const resolvers: Resolvers = {
        Query: {
            todos: async () => {
                const todos = await todoService.listTodos();
                const items = await todoService.listTodoItems(todos.map(t => t.id));

                return todos.map<Todo>(t => ({
                    id: t.id,
                    title: t.title,
                    items: items.filter(i => i.todoId == t.id).map<TodoItem>(i => ({
                        id: i.id,
                        todoId: i.todoId,
                        content: i.todoId,
                        done: i.done,
                        created: i.created.toISOString(),
                    }))
                }));
            }
        },
        Mutation: {
            addTodo: async (_, { title }) => {
                const id = await todoService.addTodo(title);
                return { id, title, items: [] };
            },
            addTodoItem: async (_, { todoId, content }) => {
                console.log(todoId, content);
                const id = await todoService.addTodoItem(todoId, content);
                console.log(id);
                const { done, created } = await todoService.getTodoItem(todoId, id);
                console.log(done, created);
                return { id, todoId, content, created: created.toISOString(), done };
            }
        }
    };

    const gateway = new ApolloGateway({
        debug: true,
        localServiceList: [todosGQLService, usersGQLService],
        buildService: (service: ServiceDefinition) => new LocalGraphQLDataSource(buildFederatedSchema([{ ...service, resolvers }]))
    });

    const server = new ApolloServer({ 
        gateway, 
        subscriptions: false,
        introspection: true,
        playground: true,
    });
    
    server.listen(4001).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });

}()).catch(error => {
    console.log(error);
    process.exit(1);
})

import { ApolloGateway, LocalGraphQLDataSource } from '@apollo/gateway';
import { buildFederatedSchema, ServiceDefinition } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import path from 'path';
import { importSchema } from 'graphql-import';
import { Resolvers, Todo } from './src/generated/graphql/todos';

(async function() {

    let data: { todos: Todo[] } = {
        todos: [ 
            { id: '1', title: 'First todo', items: [] },
            { id: '2', title: 'Second todo', items: [] },
        ]
    }

    const todosService: ServiceDefinition = {
        name: 'todos',
        typeDefs: gql(await importSchema(path.join(__dirname, "../schema/todos.graphql"))),
    }

    const usersService: ServiceDefinition = {
        name: 'users',
        typeDefs: gql(await importSchema(path.join(__dirname, "../schema/users.graphql"))),
    }

    const resolvers: Resolvers = {
        Query: {
            todos: () => Promise.resolve(data.todos),
        }
    };
    
    const gateway = new ApolloGateway({
        debug: true,
        localServiceList: [todosService, usersService],
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

import { ApolloGateway, LocalGraphQLDataSource } from '@apollo/gateway';
import { buildFederatedSchema, ServiceDefinition } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import path from 'path';
import { importSchema } from 'graphql-import';

import { TodoServiceClient } from './src/generated/pb/todo_grpc_pb';
import { UserServiceClient } from './src/generated/pb/user_grpc_pb';

(async function() {

    const todosService: ServiceDefinition = {
        name: 'todos',
        url: 'local',
        typeDefs: gql(await importSchema(path.join(__dirname, "src/schema/todos.graphql"))),
    }

    const usersService: ServiceDefinition = {
        name: 'users',
        url: 'local',
        typeDefs: gql(await importSchema(path.join(__dirname, "src/schema/users.graphql"))),
    }
    
    const gateway = new ApolloGateway({
        debug: true,
        serviceList: [todosService, usersService],
        buildService: (service: ServiceDefinition) => new LocalGraphQLDataSource(buildFederatedSchema([service]))
    });

    const server = new ApolloServer({ gateway, subscriptions: false });
    
    server.listen(4001).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });

}()).catch(error => {
    console.log(error);
    process.exit(1);
})
# TODO Fevo Homework

### Backend

There are two backend gRPC services - Users & Todos. 

TODO: 
- dockerize services

### Gateway

Gateway consumes protobufs of gRPC services to generate typed gRPC clients.

It also defines schema which is used to generate TS types.

Run `yarn build` to generate both.

Run `yarn start` to start the gateway.

TODO:
- add resolvers for service clients
- dockerize gateway 
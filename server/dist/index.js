"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const todo_1 = __importDefault(require("./schemas/todo"));
const server = new apollo_server_1.ApolloServer({
    schema: todo_1.default,
});
server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`apollo ${url}`);
});
//# sourceMappingURL=index.js.map
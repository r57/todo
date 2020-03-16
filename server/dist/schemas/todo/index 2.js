"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const todo_graphql_1 = require("./todo.graphql");
const todo_mutation_graphql_1 = __importDefault(require("./todo-mutation.graphql"));
exports.default = new graphql_1.GraphQLSchema({
    query: todo_graphql_1.Query,
    mutation: todo_mutation_graphql_1.default,
});
//# sourceMappingURL=index.js.map
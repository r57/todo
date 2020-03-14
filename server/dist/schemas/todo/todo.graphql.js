"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const constants_1 = __importDefault(require("./constants"));
const types_graphql_1 = require("./types.graphql");
exports.Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        todo: {
            type: graphql_1.GraphQLList(types_graphql_1.Todo),
            resolve: () => constants_1.default,
        },
        todoItem: {
            type: types_graphql_1.Todo,
            args: {
                id: { type: graphql_1.GraphQLString },
            },
            resolve: (_, { id }) => constants_1.default.find(todo => todo.id === id),
        },
    }),
});
//# sourceMappingURL=todo.graphql.js.map
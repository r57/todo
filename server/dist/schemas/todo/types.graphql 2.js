"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.ToDoItem = new graphql_1.GraphQLObjectType({
    name: 'TodoItem',
    fields: {
        index: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        content: { type: graphql_1.GraphQLString },
        done: { type: graphql_1.GraphQLBoolean },
        created: { type: graphql_1.GraphQLString },
        end: { type: graphql_1.GraphQLString },
    },
});
exports.Todo = new graphql_1.GraphQLObjectType({
    name: 'Todo',
    fields: {
        id: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        title: { type: graphql_1.GraphQLString },
        comment: { type: graphql_1.GraphQLString },
        items: { type: graphql_1.GraphQLList(exports.ToDoItem) },
        collab: { type: graphql_1.GraphQLList(graphql_1.GraphQLString) },
    },
});
//# sourceMappingURL=types.graphql.js.map
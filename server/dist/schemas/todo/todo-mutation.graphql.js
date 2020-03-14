"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const types_graphql_1 = require("./types.graphql");
const constants_1 = __importDefault(require("./constants"));
const utils_1 = require("../../utils");
exports.default = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation',
    fields: () => ({
        addTodoList: {
            type: types_graphql_1.Todo,
            description: 'Add Todo list item',
            args: {
                title: { type: graphql_1.GraphQLString },
                comment: { type: graphql_1.GraphQLString },
            },
            resolve: (_, args) => {
                if (!args) {
                    args = {};
                }
                const newTodo = {
                    id: utils_1.makeId(),
                    title: args.title,
                    comment: args.comment,
                    items: [],
                    collab: [],
                };
                constants_1.default.push(newTodo);
                return newTodo;
            },
        },
        addTodoItem: {
            type: types_graphql_1.ToDoItem,
            description: 'Add Todo item',
            args: {
                todoListId: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                content: { type: graphql_1.GraphQLString },
            },
            resolve: (_, args) => {
                if (!args) {
                    args = {};
                }
                const todoListIndex = constants_1.default.findIndex(singleItem => singleItem.id === args.todoListId);
                console.log(todoListIndex);
                let newTodoItem = {};
                if (todoListIndex > -1) {
                    newTodoItem = {
                        index: constants_1.default.length - 1,
                        content: args.content,
                        done: false,
                        created: new Date().toISOString(),
                        end: '',
                    };
                    constants_1.default[todoListIndex].items.push(newTodoItem);
                }
                return newTodoItem;
            },
        },
    }),
});
//# sourceMappingURL=todo-mutation.graphql.js.map
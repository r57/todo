// package: todo
// file: todos.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as todos_pb from "./todos_pb";

interface ITodoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listTodos: ITodoServiceService_IListTodos;
    listTodoItems: ITodoServiceService_IListTodoItems;
    addTodo: ITodoServiceService_IAddTodo;
    removeTodo: ITodoServiceService_IRemoveTodo;
    editTodoTitle: ITodoServiceService_IEditTodoTitle;
    editTodoDescription: ITodoServiceService_IEditTodoDescription;
    addTodoItem: ITodoServiceService_IAddTodoItem;
    removeTodoItem: ITodoServiceService_IRemoveTodoItem;
    toggleTodoItem: ITodoServiceService_IToggleTodoItem;
    editTodoItem: ITodoServiceService_IEditTodoItem;
}

interface ITodoServiceService_IListTodos extends grpc.MethodDefinition<todos_pb.ListTodosRequest, todos_pb.ListTodosResponse> {
    path: string; // "/todo.TodoService/ListTodos"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.ListTodosRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.ListTodosRequest>;
    responseSerialize: grpc.serialize<todos_pb.ListTodosResponse>;
    responseDeserialize: grpc.deserialize<todos_pb.ListTodosResponse>;
}
interface ITodoServiceService_IListTodoItems extends grpc.MethodDefinition<todos_pb.ListTodoItemsRequest, todos_pb.ListTodoItemsResponse> {
    path: string; // "/todo.TodoService/ListTodoItems"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.ListTodoItemsRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.ListTodoItemsRequest>;
    responseSerialize: grpc.serialize<todos_pb.ListTodoItemsResponse>;
    responseDeserialize: grpc.deserialize<todos_pb.ListTodoItemsResponse>;
}
interface ITodoServiceService_IAddTodo extends grpc.MethodDefinition<todos_pb.AddTodoRequest, todos_pb.Id> {
    path: string; // "/todo.TodoService/AddTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.AddTodoRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.AddTodoRequest>;
    responseSerialize: grpc.serialize<todos_pb.Id>;
    responseDeserialize: grpc.deserialize<todos_pb.Id>;
}
interface ITodoServiceService_IRemoveTodo extends grpc.MethodDefinition<todos_pb.Id, todos_pb.Empty> {
    path: string; // "/todo.TodoService/RemoveTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.Id>;
    requestDeserialize: grpc.deserialize<todos_pb.Id>;
    responseSerialize: grpc.serialize<todos_pb.Empty>;
    responseDeserialize: grpc.deserialize<todos_pb.Empty>;
}
interface ITodoServiceService_IEditTodoTitle extends grpc.MethodDefinition<todos_pb.EditTodoTitleRequest, todos_pb.Empty> {
    path: string; // "/todo.TodoService/EditTodoTitle"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.EditTodoTitleRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.EditTodoTitleRequest>;
    responseSerialize: grpc.serialize<todos_pb.Empty>;
    responseDeserialize: grpc.deserialize<todos_pb.Empty>;
}
interface ITodoServiceService_IEditTodoDescription extends grpc.MethodDefinition<todos_pb.EditTodoDescriptionRequest, todos_pb.Empty> {
    path: string; // "/todo.TodoService/EditTodoDescription"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.EditTodoDescriptionRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.EditTodoDescriptionRequest>;
    responseSerialize: grpc.serialize<todos_pb.Empty>;
    responseDeserialize: grpc.deserialize<todos_pb.Empty>;
}
interface ITodoServiceService_IAddTodoItem extends grpc.MethodDefinition<todos_pb.AddTodoItemRequest, todos_pb.Id> {
    path: string; // "/todo.TodoService/AddTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.AddTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.AddTodoItemRequest>;
    responseSerialize: grpc.serialize<todos_pb.Id>;
    responseDeserialize: grpc.deserialize<todos_pb.Id>;
}
interface ITodoServiceService_IRemoveTodoItem extends grpc.MethodDefinition<todos_pb.RemoveTodoItemRequest, todos_pb.Empty> {
    path: string; // "/todo.TodoService/RemoveTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.RemoveTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.RemoveTodoItemRequest>;
    responseSerialize: grpc.serialize<todos_pb.Empty>;
    responseDeserialize: grpc.deserialize<todos_pb.Empty>;
}
interface ITodoServiceService_IToggleTodoItem extends grpc.MethodDefinition<todos_pb.ToggleTodoItemRequest, todos_pb.Empty> {
    path: string; // "/todo.TodoService/ToggleTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.ToggleTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.ToggleTodoItemRequest>;
    responseSerialize: grpc.serialize<todos_pb.Empty>;
    responseDeserialize: grpc.deserialize<todos_pb.Empty>;
}
interface ITodoServiceService_IEditTodoItem extends grpc.MethodDefinition<todos_pb.EditTodoItemContentRequest, todos_pb.Empty> {
    path: string; // "/todo.TodoService/EditTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todos_pb.EditTodoItemContentRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.EditTodoItemContentRequest>;
    responseSerialize: grpc.serialize<todos_pb.Empty>;
    responseDeserialize: grpc.deserialize<todos_pb.Empty>;
}

export const TodoServiceService: ITodoServiceService;

export interface ITodoServiceServer {
    listTodos: grpc.handleUnaryCall<todos_pb.ListTodosRequest, todos_pb.ListTodosResponse>;
    listTodoItems: grpc.handleUnaryCall<todos_pb.ListTodoItemsRequest, todos_pb.ListTodoItemsResponse>;
    addTodo: grpc.handleUnaryCall<todos_pb.AddTodoRequest, todos_pb.Id>;
    removeTodo: grpc.handleUnaryCall<todos_pb.Id, todos_pb.Empty>;
    editTodoTitle: grpc.handleUnaryCall<todos_pb.EditTodoTitleRequest, todos_pb.Empty>;
    editTodoDescription: grpc.handleUnaryCall<todos_pb.EditTodoDescriptionRequest, todos_pb.Empty>;
    addTodoItem: grpc.handleUnaryCall<todos_pb.AddTodoItemRequest, todos_pb.Id>;
    removeTodoItem: grpc.handleUnaryCall<todos_pb.RemoveTodoItemRequest, todos_pb.Empty>;
    toggleTodoItem: grpc.handleUnaryCall<todos_pb.ToggleTodoItemRequest, todos_pb.Empty>;
    editTodoItem: grpc.handleUnaryCall<todos_pb.EditTodoItemContentRequest, todos_pb.Empty>;
}

export interface ITodoServiceClient {
    listTodos(request: todos_pb.ListTodosRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todos_pb.ListTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todos_pb.ListTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodoItems(request: todos_pb.ListTodoItemsRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    listTodoItems(request: todos_pb.ListTodoItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    listTodoItems(request: todos_pb.ListTodoItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    addTodo(request: todos_pb.AddTodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    addTodo(request: todos_pb.AddTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    addTodo(request: todos_pb.AddTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    removeTodo(request: todos_pb.Id, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTodo(request: todos_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTodo(request: todos_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoTitle(request: todos_pb.EditTodoTitleRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoTitle(request: todos_pb.EditTodoTitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoTitle(request: todos_pb.EditTodoTitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoDescription(request: todos_pb.EditTodoDescriptionRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoDescription(request: todos_pb.EditTodoDescriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoDescription(request: todos_pb.EditTodoDescriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    addTodoItem(request: todos_pb.AddTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    addTodoItem(request: todos_pb.AddTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    addTodoItem(request: todos_pb.AddTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    removeTodoItem(request: todos_pb.RemoveTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTodoItem(request: todos_pb.RemoveTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTodoItem(request: todos_pb.RemoveTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    toggleTodoItem(request: todos_pb.ToggleTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    toggleTodoItem(request: todos_pb.ToggleTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    toggleTodoItem(request: todos_pb.ToggleTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoItem(request: todos_pb.EditTodoItemContentRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoItem(request: todos_pb.EditTodoItemContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoItem(request: todos_pb.EditTodoItemContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class TodoServiceClient extends grpc.Client implements ITodoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listTodos(request: todos_pb.ListTodosRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todos_pb.ListTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todos_pb.ListTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodoItems(request: todos_pb.ListTodoItemsRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public listTodoItems(request: todos_pb.ListTodoItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public listTodoItems(request: todos_pb.ListTodoItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public addTodo(request: todos_pb.AddTodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    public addTodo(request: todos_pb.AddTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    public addTodo(request: todos_pb.AddTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    public removeTodo(request: todos_pb.Id, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTodo(request: todos_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTodo(request: todos_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoTitle(request: todos_pb.EditTodoTitleRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoTitle(request: todos_pb.EditTodoTitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoTitle(request: todos_pb.EditTodoTitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoDescription(request: todos_pb.EditTodoDescriptionRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoDescription(request: todos_pb.EditTodoDescriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoDescription(request: todos_pb.EditTodoDescriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public addTodoItem(request: todos_pb.AddTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    public addTodoItem(request: todos_pb.AddTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    public addTodoItem(request: todos_pb.AddTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Id) => void): grpc.ClientUnaryCall;
    public removeTodoItem(request: todos_pb.RemoveTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTodoItem(request: todos_pb.RemoveTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTodoItem(request: todos_pb.RemoveTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public toggleTodoItem(request: todos_pb.ToggleTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public toggleTodoItem(request: todos_pb.ToggleTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public toggleTodoItem(request: todos_pb.ToggleTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoItem(request: todos_pb.EditTodoItemContentRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoItem(request: todos_pb.EditTodoItemContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoItem(request: todos_pb.EditTodoItemContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Empty) => void): grpc.ClientUnaryCall;
}

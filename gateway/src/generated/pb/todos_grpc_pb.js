// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todos_pb = require('./todos_pb.js');

function serialize_todo_AddTodoItemRequest(arg) {
  if (!(arg instanceof todos_pb.AddTodoItemRequest)) {
    throw new Error('Expected argument of type todo.AddTodoItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_AddTodoItemRequest(buffer_arg) {
  return todos_pb.AddTodoItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_AddTodoRequest(arg) {
  if (!(arg instanceof todos_pb.AddTodoRequest)) {
    throw new Error('Expected argument of type todo.AddTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_AddTodoRequest(buffer_arg) {
  return todos_pb.AddTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_EditTodoDescriptionRequest(arg) {
  if (!(arg instanceof todos_pb.EditTodoDescriptionRequest)) {
    throw new Error('Expected argument of type todo.EditTodoDescriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_EditTodoDescriptionRequest(buffer_arg) {
  return todos_pb.EditTodoDescriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_EditTodoItemContentRequest(arg) {
  if (!(arg instanceof todos_pb.EditTodoItemContentRequest)) {
    throw new Error('Expected argument of type todo.EditTodoItemContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_EditTodoItemContentRequest(buffer_arg) {
  return todos_pb.EditTodoItemContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_EditTodoTitleRequest(arg) {
  if (!(arg instanceof todos_pb.EditTodoTitleRequest)) {
    throw new Error('Expected argument of type todo.EditTodoTitleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_EditTodoTitleRequest(buffer_arg) {
  return todos_pb.EditTodoTitleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_Empty(arg) {
  if (!(arg instanceof todos_pb.Empty)) {
    throw new Error('Expected argument of type todo.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_Empty(buffer_arg) {
  return todos_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_Id(arg) {
  if (!(arg instanceof todos_pb.Id)) {
    throw new Error('Expected argument of type todo.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_Id(buffer_arg) {
  return todos_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ListTodoItemsRequest(arg) {
  if (!(arg instanceof todos_pb.ListTodoItemsRequest)) {
    throw new Error('Expected argument of type todo.ListTodoItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ListTodoItemsRequest(buffer_arg) {
  return todos_pb.ListTodoItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ListTodoItemsResponse(arg) {
  if (!(arg instanceof todos_pb.ListTodoItemsResponse)) {
    throw new Error('Expected argument of type todo.ListTodoItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ListTodoItemsResponse(buffer_arg) {
  return todos_pb.ListTodoItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ListTodosRequest(arg) {
  if (!(arg instanceof todos_pb.ListTodosRequest)) {
    throw new Error('Expected argument of type todo.ListTodosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ListTodosRequest(buffer_arg) {
  return todos_pb.ListTodosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ListTodosResponse(arg) {
  if (!(arg instanceof todos_pb.ListTodosResponse)) {
    throw new Error('Expected argument of type todo.ListTodosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ListTodosResponse(buffer_arg) {
  return todos_pb.ListTodosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_RemoveTodoItemRequest(arg) {
  if (!(arg instanceof todos_pb.RemoveTodoItemRequest)) {
    throw new Error('Expected argument of type todo.RemoveTodoItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_RemoveTodoItemRequest(buffer_arg) {
  return todos_pb.RemoveTodoItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ToggleTodoItemRequest(arg) {
  if (!(arg instanceof todos_pb.ToggleTodoItemRequest)) {
    throw new Error('Expected argument of type todo.ToggleTodoItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ToggleTodoItemRequest(buffer_arg) {
  return todos_pb.ToggleTodoItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// #services
var TodoServiceService = exports.TodoServiceService = {
  listTodos: {
    path: '/todo.TodoService/ListTodos',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.ListTodosRequest,
    responseType: todos_pb.ListTodosResponse,
    requestSerialize: serialize_todo_ListTodosRequest,
    requestDeserialize: deserialize_todo_ListTodosRequest,
    responseSerialize: serialize_todo_ListTodosResponse,
    responseDeserialize: deserialize_todo_ListTodosResponse,
  },
  listTodoItems: {
    path: '/todo.TodoService/ListTodoItems',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.ListTodoItemsRequest,
    responseType: todos_pb.ListTodoItemsResponse,
    requestSerialize: serialize_todo_ListTodoItemsRequest,
    requestDeserialize: deserialize_todo_ListTodoItemsRequest,
    responseSerialize: serialize_todo_ListTodoItemsResponse,
    responseDeserialize: deserialize_todo_ListTodoItemsResponse,
  },
  addTodo: {
    path: '/todo.TodoService/AddTodo',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.AddTodoRequest,
    responseType: todos_pb.Id,
    requestSerialize: serialize_todo_AddTodoRequest,
    requestDeserialize: deserialize_todo_AddTodoRequest,
    responseSerialize: serialize_todo_Id,
    responseDeserialize: deserialize_todo_Id,
  },
  removeTodo: {
    path: '/todo.TodoService/RemoveTodo',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.Id,
    responseType: todos_pb.Empty,
    requestSerialize: serialize_todo_Id,
    requestDeserialize: deserialize_todo_Id,
    responseSerialize: serialize_todo_Empty,
    responseDeserialize: deserialize_todo_Empty,
  },
  editTodoTitle: {
    path: '/todo.TodoService/EditTodoTitle',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.EditTodoTitleRequest,
    responseType: todos_pb.Empty,
    requestSerialize: serialize_todo_EditTodoTitleRequest,
    requestDeserialize: deserialize_todo_EditTodoTitleRequest,
    responseSerialize: serialize_todo_Empty,
    responseDeserialize: deserialize_todo_Empty,
  },
  editTodoDescription: {
    path: '/todo.TodoService/EditTodoDescription',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.EditTodoDescriptionRequest,
    responseType: todos_pb.Empty,
    requestSerialize: serialize_todo_EditTodoDescriptionRequest,
    requestDeserialize: deserialize_todo_EditTodoDescriptionRequest,
    responseSerialize: serialize_todo_Empty,
    responseDeserialize: deserialize_todo_Empty,
  },
  addTodoItem: {
    path: '/todo.TodoService/AddTodoItem',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.AddTodoItemRequest,
    responseType: todos_pb.Id,
    requestSerialize: serialize_todo_AddTodoItemRequest,
    requestDeserialize: deserialize_todo_AddTodoItemRequest,
    responseSerialize: serialize_todo_Id,
    responseDeserialize: deserialize_todo_Id,
  },
  removeTodoItem: {
    path: '/todo.TodoService/RemoveTodoItem',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.RemoveTodoItemRequest,
    responseType: todos_pb.Empty,
    requestSerialize: serialize_todo_RemoveTodoItemRequest,
    requestDeserialize: deserialize_todo_RemoveTodoItemRequest,
    responseSerialize: serialize_todo_Empty,
    responseDeserialize: deserialize_todo_Empty,
  },
  toggleTodoItem: {
    path: '/todo.TodoService/ToggleTodoItem',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.ToggleTodoItemRequest,
    responseType: todos_pb.Empty,
    requestSerialize: serialize_todo_ToggleTodoItemRequest,
    requestDeserialize: deserialize_todo_ToggleTodoItemRequest,
    responseSerialize: serialize_todo_Empty,
    responseDeserialize: deserialize_todo_Empty,
  },
  editTodoItem: {
    path: '/todo.TodoService/EditTodoItem',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.EditTodoItemContentRequest,
    responseType: todos_pb.Empty,
    requestSerialize: serialize_todo_EditTodoItemContentRequest,
    requestDeserialize: deserialize_todo_EditTodoItemContentRequest,
    responseSerialize: serialize_todo_Empty,
    responseDeserialize: deserialize_todo_Empty,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);

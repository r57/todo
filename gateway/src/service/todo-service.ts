import { Todo, TodoItem } from "../model/todo";


export interface TodoService {

    getTodo(id: string): Promise<Todo>;

    getTodoItem(todoId: string, id: string): Promise<TodoItem>;

    listTodos(): Promise<Todo[]>;

    listTodoItems(todoIds: string[]): Promise<TodoItem[]>;

    addTodo(title: string): Promise<string>;

    addTodoItem(todoId: string, title: string): Promise<string>;

}
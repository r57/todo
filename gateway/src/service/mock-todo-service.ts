import { TodoService } from './todo-service';
import { Todo, TodoItem } from '../model/todo';

export class MockTodoService implements TodoService {

    private todos: Todo[] = [];

    private todoItems: { [key: string]: TodoItem[] } = {};

    getTodo(id: string): Promise<Todo> {
        return Promise.resolve(this.todos.find(t => t.id === id));
    }

    getTodoItem(todoId: string, id: string): Promise<TodoItem> {
        const items = this.todoItems[todoId];
        if (items === undefined) throw new Error("Unknown Todo ID");
        return Promise.resolve(items.find(i => i.id === id));
    }

    listTodos(): Promise<Todo[]> {
        return Promise.resolve(this.todos);
    }

    listTodoItems(todoId: string[]): Promise<TodoItem[]> {
        return Promise.resolve(todoId.flatMap(todoId => {
            return this.todoItems[todoId]
                ? this.todoItems[todoId]
                : [];
        }));
    }

    addTodo(title: string): Promise<string> {
        const id = this.newId();
        const todo: Todo = { id, title, comment: '' };
        this.todos = [...this.todos, todo];
        this.todoItems[id] = [];
        return Promise.resolve(id);
    }

    addTodoItem(todoId: string, content: string): Promise<string> {
        const currentItems = this.todoItems[todoId];
        console.log(todoId, this.todoItems);
        if (currentItems === undefined) throw new Error("Unknown Todo ID")
        const id = this.newId();
        const newItem: TodoItem = { id, todoId, content, created: new Date, done: false };
        this.todoItems[todoId] = [ ...currentItems, newItem ];
        return Promise.resolve(id);
    }

    private newId(): string {
        return Math.floor(Math.random() * 10e10).toString();
    }

}
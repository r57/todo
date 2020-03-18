export interface TodoListItem {
  id: string;
  title: string;
  comment: string;
  items: TodoItem[];
  collab: string[];
}

export interface TodoItem {
  index: number;
  content: string;
  done: boolean;
  created: string;
  end: string;
}

export default [] as TodoListItem[];

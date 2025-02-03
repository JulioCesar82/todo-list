import TodoItem from '../todoItem';

interface ITodoList {
  addTodoItem: (title: string) => TodoItem;
  addTodoItems: (titles: string[]) => TodoItem[];
  removeTodoItem: (id: number) => boolean;
  markTodoItemComplete: (id: number) => boolean;
  getTodoItems: (showCompleted?: boolean) => TodoItem[];
}

export default ITodoList;
import Todo from '../models/todo';

interface ITodoListService {
  addTodo: (title: string) => Todo;
  addTodos: (titles: string[]) => Todo[];
  removeTodo: (id: number) => boolean;
  markTodoComplete: (id: number) => boolean;
  getTodos: (showCompleted?: boolean) => Todo[];
}

export default ITodoListService;
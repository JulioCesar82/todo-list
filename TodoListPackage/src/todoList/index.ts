import Todo from '../models/todo';
import ITodoList from './interface';

class TodoList implements ITodoList {
  protected todos: Todo[] = [];
  private nextId: number = 1;

  constructor (todos: string[] = [])
  {
    this.addTodos(todos);
  }

  addTodo(title: string): Todo {
    if (typeof title !== "string")
      throw new Error('Invalid title content');

    title = title.trim();

    if (title.length === 0)
      throw new Error('Invalid title value');

    const newTodo = new Todo(this.nextId++, title);
    this.todos.push(newTodo);
    
    return newTodo;
  }

  addTodos(titles: string[]): Todo[] {
    let newTodos: Todo[] = [];

    titles.forEach(title => {
      const newTodo = this.addTodo(title);
      
      newTodos.push(newTodo);
    });
   
    return newTodos;
  }

  removeTodo(id: number): boolean {
    const index = this.todos.findIndex(todo => todo.id === id);
    
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }

    return false;
  }

  markTodoComplete(id: number): boolean {
    const todo = this.todos.find(todo => todo.id === id);
    
    if (todo) {
      todo.completed = true;
      return true;
    }

    return false;
  }

  getTodos(showCompleted: boolean = true): Todo[] {
    return this.todos.filter(todo => todo.completed === showCompleted);
  }
}

export default TodoList;
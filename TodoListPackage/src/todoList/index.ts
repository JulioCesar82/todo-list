import TodoItem from '../todoItem';
import ITodoList from './interface';

class TodoList implements ITodoList {
  protected todoItems: TodoItem[] = [];
  private nextId: number = 1;

  constructor (todos: string[] = [])
  {
    this.addTodoItems(todos);
  }

  addTodoItem(title: string): TodoItem {
    if (typeof title !== "string")
      throw new Error('Invalid title content');

    title = title.trim();

    if (title.length === 0)
      throw new Error('Invalid title value');

    const newTodoItem = new TodoItem(this.nextId++, title);
    this.todoItems.push(newTodoItem);
    
    return newTodoItem;
  }

  addTodoItems(titles: string[]): TodoItem[] {
    let newTodoItems: TodoItem[] = [];

    titles.forEach(title => {
      const newTodoItem = this.addTodoItem(title);
      
      newTodoItems.push(newTodoItem);
    });
   
    return newTodoItems;
  }

  removeTodoItem(id: number): boolean {
    const index = this.todoItems.findIndex(todo => todo.id === id);
    
    if (index !== -1) {
      this.todoItems.splice(index, 1);
      return true;
    }

    return false;
  }

  markTodoItemComplete(id: number): boolean {
    const todo = this.todoItems.find(todo => todo.id === id);
    
    if (todo) {
      todo.completed = true;
      return true;
    }

    return false;
  }

  getTodoItems(showCompleted: boolean = true): TodoItem[] {
    return this.todoItems.filter(todo => todo.completed === showCompleted);
  }
}

export default TodoList;
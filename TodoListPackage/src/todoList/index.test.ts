import { Todo, TodoList } from '../index';

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it('should add a new todo', () => {
    const todo = todoList.addTodo('Learn TypeScript');

    expect(todo.title).toBe('Learn TypeScript');
    expect(todo.completed).toBe(false);
  });

  it('should remove a todo', () => {
    const todo = todoList.addTodo('Test Todo');
    const removed = todoList.removeTodo(todo.id);

    expect(removed).toBe(true);
  });

  it('should mark a todo as complete', () => {
    const todo = todoList.addTodo('Complete Todo');
    todoList.markTodoComplete(todo.id);

    expect(todo.completed).toBe(true);
  });

  it('should get only incomplete todos', () => {
    todoList.addTodo('Incomplete Todo');
    const completedTodo = todoList.addTodo('Complete Todo');
    
    todoList.markTodoComplete(completedTodo.id);
    const incompleteTodos = todoList.getTodos(false);
    
    expect(incompleteTodos.length).toBe(1);
  });
});
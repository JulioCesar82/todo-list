import { TodoItem, TodoList } from '../index';

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it('should add a new todo', () => {
    const todo = todoList.addTodoItem('Learn TypeScript');

    expect(todo.title).toBe('Learn TypeScript');
    expect(todo.completed).toBe(false);
  });

  it('should remove a todo', () => {
    const todo = todoList.addTodoItem('Test Todo');
    const removed = todoList.removeTodoItem(todo.id);

    expect(removed).toBe(true);
  });

  it('should mark a todo as complete', () => {
    const todo = todoList.addTodoItem('Complete Todo');
    todoList.markTodoItemComplete(todo.id);

    expect(todo.completed).toBe(true);
  });

  it('should get only incomplete todos', () => {
    todoList.addTodoItem('Incomplete Todo');
    const completedTodo = todoList.addTodoItem('Complete Todo');
    
    todoList.markTodoItemComplete(completedTodo.id);
    const incompleteTodos = todoList.getTodoItems(false);
    
    expect(incompleteTodos.length).toBe(1);
  });
});
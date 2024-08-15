import { useState, useEffect } from 'react';
import { TodoList } from 'my-todolist-package';

const Home = () => {
  const [todoList] = useState(new TodoList());
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState(todoList.getTodos());

  useEffect(() => {
    // Initiate with some todos
    todoList.addTodo('Learn Next.js');
    todoList.addTodo('Learn TypeScript');
    setTodos(todoList.getTodos());
  }, [todoList]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      todoList.addTodo(newTodo);
      setNewTodo('');
      setTodos(todoList.getTodos());
    }
  };

  const handleMarkComplete = (id: number) => {
    todoList.markTodoComplete(id);
    setTodos(todoList.getTodos());
  };

  const handleRemoveTodo = (id: number) => {
    todoList.removeTodo(id);
    setTodos(todoList.getTodos());
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo Next App</h1>
      <div>
        <input 
          type="text" 
          placeholder="New task" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => handleMarkComplete(todo.id)} 
            />
            {todo.title}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
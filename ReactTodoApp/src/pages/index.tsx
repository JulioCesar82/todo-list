import { useState, useEffect } from 'react';
import { Todo, TodoList } from 'my-todolist-package';

const Home = () => {
  class ObservableTodoList extends TodoList
  {
    constructor() {
      super();

      this.todos = new Proxy<Todo[]>([], {
          set: (target, key, val) => { 
            const setAction = target[key] = val;

            setTodos(this.getTodos(false));

            return setAction;
          },

          get: (tgt, prop, rcvr) => {
            if (prop === 'splice') {
              const origMethod = tgt[prop];
  
              return (...args) => {
                origMethod.apply(tgt, args);

                setTodos(this.getTodos(false));
              }
            }

            return tgt[prop];
        }
      })
    }
  }

  const [newTodo, setNewTodo] = useState<string>('');
  const [todoList] = useState<TodoList>(new ObservableTodoList());
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    try
    {
      todoList.addTodo(newTodo);
      setNewTodo('');
    }
    catch (err: any)
    {
      alert(err?.message);
    }
  };

  const handleMarkComplete = (id: number) => {
    todoList.markTodoComplete(id);
  };

  const handleRemoveTodo = (id: number) => {
    todoList.removeTodo(id);
  };

  return (
    <div>
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
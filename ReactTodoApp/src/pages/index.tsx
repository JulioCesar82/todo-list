import { useState, useEffect, useReducer, Component } from 'react';
import { Todo, TodoList } from 'my-todolist-package';

const generateObservableProxy = <T extends object>(defaultValue: T, action: CallableFunction) => 
  new Proxy<T>(defaultValue, {
    set: (target, prop, val) => { 
      const setAction = target[prop] = val;

      action();

      return setAction;
    },

    get: (target, prop, receiver) => {

      const getValue = target[prop];

      // todo: gambiarra loop infinito se habilitar chamada de todas as Functions
      const validMethods = ['splice'];
      
      // if (typeof getValue === 'function') {
      if (validMethods.includes(prop)) {

        return (...args) => {
          action();

          getValue.apply(target, args);
        }
      }

      return getValue;
    }
  });

export class ObservableTodoList extends TodoList
{
  constructor(action: CallableFunction, todos: string[] = []) {
    super(todos);

    this.todos = generateObservableProxy<Todo[]>([], action);
  }
}

class Home extends Component {
  
  constructor(props: any) {
    super(props);

    this.state = {
      newTodo: '',
      todoList: new ObservableTodoList(() => {
        this.setState({...this.state, ...{todos: this.state.todoList.getTodos(false)} });
      }),
      todos: []
    };
  }

  handleAddTodo = () => {
    try
    {
      this.state.todoList.addTodo(this.state.newTodo);

      // todo: gambiarra
      setTimeout(() => 
        this.setState({...this.state, ...{newTodo: ''}}),
        50);
    }
    catch (err: any)
    {
      alert(err?.message);
    }
  }

  handleMarkComplete = (id: number) => {
    this.state.todoList.markTodoComplete(id);
  }

  handleRemoveTodo = (id: number) => {
    this.state.todoList.removeTodo(id);
  }

  render() {
    const { newTodo, todos } = this.state;

    return (
      <div>
        <h1>Todo Next App</h1>
        <div>
          <input 
            type="text" 
            placeholder="New task" 
            value={newTodo} 
            onChange={(e) => this.setState({...this.state, ...{newTodo: e.target.value}})}
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id}>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => this.handleMarkComplete(todo.id)} 
              />
              {todo.title}
              <button onClick={() => this.handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Home;
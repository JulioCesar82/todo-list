import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Todo, TodoList } from 'my-todolist-package';
import TodoListComponent, { ObservableTodoList } from './index';

class FakeTodoListComponent extends TodoListComponent
{

  private list: string[] = []

  constructor(props: any) {
    
    super(undefined);

    //// this.setState({...this.state, ...{todos}});
    // this.state = {...this.state, ...props};

    // todo: gambiarra
    const todos = props.todoList.getTodos(false);

    this.list = todos.map(todo => todo.title);
  }

  componentDidMount() {

    this.state.todoList.addTodos(this.list);
  }
} 


export default {
  title: 'TodoListComponent',
  component: FakeTodoListComponent,
} as Meta;

type Story = StoryObj<FakeTodoListComponent>;

export const Empty: Story = {
  args: 
  {
    todoList: new TodoList()
  }
};

export const WithTodos: Story = {
  args: 
  {
    todoList: new TodoList([ 'Learn Angular', 'Learn Storybook' ])
  }
};

const allCompletedTodoList = new TodoList([ 'Learn Angular', 'Learn Storybook' ]);
allCompletedTodoList.markTodoComplete(1);
allCompletedTodoList.markTodoComplete(2);

export const AllCompleted: Story = {
  args: 
  {
    todoList: allCompletedTodoList
  }
};

const mixedTodoList = new TodoList([ 'Learn Angular', 'Learn Storybook' ]);
mixedTodoList.markTodoComplete(2);

export const MixedTodos: Story = {
  args: 
  {
    todoList: mixedTodoList
  }
};
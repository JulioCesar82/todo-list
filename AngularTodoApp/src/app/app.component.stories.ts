import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

//import { TodoListComponent } from './todo-list.component';
import { AppComponent } from './app.component';
import { Todo, TodoList } from 'my-todolist-package';

class FakeAppComponent extends AppComponent
{
  constructor(todoList: TodoList) {
    super(undefined);

    this.todoList = todoList;
  }
} 

const meta: Meta<AppComponent> = {
  title: 'TodoListComponent',
  component: AppComponent,
  // decorators: [
  //   moduleMetadata({
  //     declarations: [AppComponent],
  //     imports: [CommonModule],
  //   }),
  // ],
};

export default meta;

type Story = StoryObj<AppComponent>;

export const Empty: Story = {
  render: (args: AppComponent) => ({
    props: {
      ...args,
      todoList: new TodoList()
    }
  }),
  // args: {
  //   todoList: new TodoList()
  // }
};

export const WithTodos: Story = {
  render: (args: AppComponent) => ({
    props: {
      ...args,
      todoList: new TodoList([ 'Learn Angular', 'Learn Storybook' ])
    }
  }),
  // args: {
  //   todoList: new TodoList([ 'Learn Angular', 'Learn Storybook' ])
  // }
};

const allCompletedTodoList = new TodoList([ 'Learn Angular', 'Learn Storybook' ]);
allCompletedTodoList.markTodoComplete(1);
allCompletedTodoList.markTodoComplete(2);

export const AllCompleted: Story = {
  render: (args: AppComponent) => ({
    props: {
      ...args,
      todoList: allCompletedTodoList
    }
  }),
  // args: {
  //   todoList: allCompletedTodoList
  // }
};

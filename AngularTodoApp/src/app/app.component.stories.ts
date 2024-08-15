import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';

//import { TodoListComponent } from './todo-list.component';
import { AppComponent } from './app.component';
import { Todo } from 'my-todolist-package';

export default {
  title: 'TodoListComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  todos: [],
};

export const WithTodos = Template.bind({});
WithTodos.args = {
  todos: [
    new Todo(1, 'Learn Angular'),
    new Todo(2, 'Learn Storybook'),
  ],
};

export const AllCompleted = Template.bind({});
AllCompleted.args = {
  todos: [
    new Todo (1, 'Learn Angular', true),
    new Todo (2, 'Learn Storybook', true),
  ],
};
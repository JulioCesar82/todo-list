import React from 'react';
import { Meta, Story } from '@storybook/react';
import TodoList from './index';

export default {
  title: 'TodoList',
  component: TodoList,
} as Meta;

const Template: Story = (args) => <TodoList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  todos: [],
};

export const WithTodos = Template.bind({});
WithTodos.args = {
  todos: [
    { id: 1, title: 'Learn Next.js', completed: false },
    { id: 2, title: 'Learn Storybook', completed: false },
  ],
};

export const AllCompleted = Template.bind({});
AllCompleted.args = {
  todos: [
    { id: 1, title: 'Learn Next.js', completed: true },
    { id: 2, title: 'Learn Storybook', completed: true },
  ],
};

export const MixedTodos = Template.bind({});
MixedTodos.args = {
  todos: [
    { id: 1, title: 'Learn Next.js', completed: true },
    { id: 2, title: 'Learn Storybook', completed: false },
  ],
};
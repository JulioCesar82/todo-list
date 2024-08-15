import { Meta, Story } from '@storybook/vue3';
import TodoList from './Home.vue';

export default {
  title: 'TodoList',
  component: TodoList,
} as Meta;

const Template: Story = (args) => ({
  components: { TodoList },
  setup() {
    return { args };
  },
  template: '<TodoList v-bind="args" />',
});

export const Empty = Template.bind({});
Empty.args = {
  todos: [],
};

export const WithTodos = Template.bind({});
WithTodos.args = {
  todos: [
    { id: 1, title: 'Learn Vue.js', completed: false },
    { id: 2, title: 'Learn Storybook', completed: false },
  ],
};

export const AllCompleted = Template.bind({});
AllCompleted.args = {
  todos: [
    { id: 1, title: 'Learn Vue.js', completed: true },
    { id: 2, title: 'Learn Storybook', completed: true },
  ],
};

export const MixedTodos = Template.bind({});
MixedTodos.args = {
  todos: [
    { id: 1, title: 'Learn Vue.js', completed: true },
    { id: 2, title: 'Learn Storybook', completed: false },
  ],
};
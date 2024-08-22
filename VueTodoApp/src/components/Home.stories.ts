import type { Meta, StoryObj } from '@storybook/vue3'

import TodoListComponent, { Component } from './Home.vue'
import { Todo, TodoList } from 'my-todolist-package'

const FakeTodoListComponent = {
  ...Component,
  mounted() {
    setInterval(() => {
      Object.entries(this.$attrs).forEach(([key, value]) => {
        if (this[key] && this[key] !== value) {
          this[key] = value
        }
      })
    }, 50)
  }
}

const meta = {
  title: 'TodoListComponent',
  component: FakeTodoListComponent
} as Meta

export default meta

//type Story = StoryObj<typeof meta>;

// export default Story;

const Template = (args: any, { argTypes }: any) => ({
  components: { TodoListComponent: FakeTodoListComponent },
  template: '<TodoListComponent  v-bind="allPropsFromArgs" />',
  props: {
    allPropsFromArgs: {
      default: () => args
    }
  }
})

export const Empty = Template.bind({})
Empty.args = {
  todoList: new TodoList()
}

export const WithTodos = Template.bind({})
WithTodos.args = {
  todoList: new TodoList(['Learn Angular', 'Learn Storybook'])
}

const allCompletedTodoList = new TodoList(['Learn Angular', 'Learn Storybook'])
allCompletedTodoList.markTodoComplete(1)
allCompletedTodoList.markTodoComplete(2)

export const AllCompleted = Template.bind({})
AllCompleted.args = {
  todoList: allCompletedTodoList
}

const mixedTodoList = new TodoList(['Learn Angular', 'Learn Storybook'])
mixedTodoList.markTodoComplete(2)

export const MixedTodos = Template.bind({})
MixedTodos.args = {
  todoList: mixedTodoList
}

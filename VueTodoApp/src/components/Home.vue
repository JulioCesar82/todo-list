<template>
  <div class="home">
    <ErrorBoundary>
      
    <h1>{{ title }}</h1>
    <div>
      <input v-model="newTodo" type="text" placeholder="Nova tarefa" @keyup.enter="addTodo">
      <button @click="addTodo">Adicionar</button>
    </div>
    <ul>
      <li v-for="todo in todoList.getTodos(false)" :key="todo.id">
        <input type="checkbox" :checked="todo.completed" @click="markComplete(todo.id)">
        {{ todo.title }}
        <button @click="removeTodo(todo.id)">Remover</button>
      </li>
    </ul>

  </ErrorBoundary>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ErrorBoundary from './Error.vue';
import { TodoList } from 'my-todolist-package';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      title: 'Todo Vue App',
      todoList: new TodoList(),
      newTodo: ''
    };
  },
  methods: {
    markComplete(id: number) {
      this.todoList.markTodoComplete(id);
    },
    addTodo() {
      try {
        this.todoList.addTodo(this.newTodo);
        this.newTodo = '';
      }
      catch (err) {
        alert(err.message)
      }
    },
    removeTodo(id: number) {
      this.todoList.removeTodo(id);
    }
  },
  components: {
    ErrorBoundary
  },
});
</script>

<style scoped>
/* Add styles here if necessary */
</style>

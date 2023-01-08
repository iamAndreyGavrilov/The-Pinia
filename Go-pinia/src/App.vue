<script setup>
import {useTodosStore} from "@/store/todos";
import {ref} from "vue";

const {todos, addTodo} = useTodosStore();

const newTodo = ref("");

</script>

<template>
  <main>
    <input v-model="newTodo"/>
    <button @click="addTodo(newTodo)">Add</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.done"/>
        <span>{{ todo.text }}</span>
      </li>
    </ul>
  </main>
</template>

<style scoped>

</style>

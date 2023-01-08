<script setup>
import {useTodosStore} from "@/store/todos";
import {ref} from "vue";

import {storeToRefs} from "pinia"; // Why? типа реактивные данные

const todosStore = useTodosStore();

const {filteredTodos} = storeToRefs(todosStore); // Why? типа реактивные данные

const {addTodo, toggleTodo, updateFilter} = todosStore; // любая функция котрая не связана с состоянием

const newTodo = ref("");

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = "";
}

</script>

<template>
  <main>
    <div>
      <button @click="updateFilter('all')">All</button>
      <button @click="updateFilter('finished')">Finished</button>
      <button @click="updateFilter('unfinished')">Unfinished</button>
    </div>
    <input v-model="newTodo"/>
    <button @click="addNewTodo(newTodo)">Add</button>

    <div v-for="todo in filteredTodos" :key="todo.id" style="display: flex">
      <h1 :style="todo.done && {textDecoration: 'line-through'}">{{ todo.text }}</h1>
      <button @click="toggleTodo(todo.id)">toggle</button>
    </div>
  </main>
</template>

<style scoped>

</style>

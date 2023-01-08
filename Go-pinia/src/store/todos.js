import {defineStore} from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [
            {id: 1, text: 'Learn Vue 3', done: true},
            {id: 2, text: 'Learn Pinia', done: false},
            {id: 3, text: 'Build something awesome', done: false},
        ],
    }),
    actions: {
        addTodo(text) {
            if (!text) return;
            this.todos.push({
                id: Math.floor(Math.random() * 1000000000000),
                text: text,
                done: false,
            })
        }
    }
})
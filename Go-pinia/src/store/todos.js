import {defineStore} from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [
            {id: 1, text: 'Learn Vue 3', done: true},
            {id: 2, text: 'Learn Pinia', done: false},
            {id: 3, text: 'Build something awesome', done: false},
            {id: 4, text: 'Profit', done: false},
            {id: 5, text: 'Profit 2', done: true},
            {id: 6, text: 'Profit 3', done: false},
            {id: 7, text: 'Profit 4', done: true},
            {id: 8, text: 'Profit 5', done: false},
        ],
        filter: 'all',
    }),
    getters: {
        filteredTodos() {
            if (this.filter === 'finished') {
                return this.todos.filter(todo => todo.done);
            } else if (this.filter === 'unfinished') {
                return this.todos.filter(todo => !todo.done);
            } else {
                return this.todos;
            }
        },
    },
    actions: {
        addTodo(text) {
            if (!text) return;
            this.todos.push({
                id: Math.floor(Math.random() * 1000000000000),
                text: text,
                done: false,
            })
        },
        toggleTodo(id) {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) todo.done = !todo.done;
        },
        updateFilter(value) {
            this.filter = value;
        },
    }
})
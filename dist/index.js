"use strict";
const button = document.getElementById('btn');
const input = document.getElementById('todoinput');
const list = document.getElementById('todolist');
const form = document.querySelector('form'); // Typescript knows that form is an HTML element: const form = document.querySelector('#todoform')! as HTMLFormElement;
const todos = readTodos();
todos.forEach(createTodo);
// Read Todos from Local Storage if present
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
// Submit handler for form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    saveTodos();
    input.value = '';
    // also.  This function is not in the context of HTML form element so you have to annotate type for e which you don't have to above.
    // function handleSubmit(e: SubmitEvent) {
    //   e.preventDefault();
    // }
});
// Create todo HTML element
function createTodo(todo) {
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}

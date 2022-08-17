"use strict";
const button = document.getElementById('btn');
const input = document.getElementById('todoinput');
const list = document.getElementById('todolist');
const form = document.querySelector('form'); // Typescript knows that form is an HTML element
// also
// const form = document.querySelector('#todoform')! as HTMLFormElement;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
    input.value = '';
});
// also.  This function is not in the context of HTML form element so you have to annotate type for e which you don't have to above.
// function handleSubmit(e: SubmitEvent) {
//   e.preventDefault();
// }

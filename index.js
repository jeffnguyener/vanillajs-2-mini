let form = document.querySelector('form');
form.addEventListener('submit', addTodo);

function addTodo(e) {
    e.preventDefault();
    let element = document.createElement('li')
    let input = document.querySelector('#item').value;
    element.innerText = input;
    let button = document.createElement('button');
    button.innerText = 'X';
    element.appendChild(button);
    button.addEventListener('click', removeTodo);
    let ul = document.querySelector('ul');
    ul.appendChild(element);
}

function removeTodo(e) {
    e.target.parentNode.remove();
}
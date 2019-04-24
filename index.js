let form = document.querySelector('form');
form.addEventListener('submit', addTodo);

function addTodo(e) {
    e.preventDefault();
    let element = document.createElement('li')
    element.addEventListener('click', completeTodo);
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
    console.log('event target \name', e.target);
    console.log('parent node');
    console.dir(e.target.parentNode);
    e.target.parentNode.remove();
}

function completeTodo(e) {
    let checked = e.target.getAttribute('aria-checked')
    if (checked !== 'true') {
        e.target.setAttribute('aria-checked', 'true');
    }
    else e.target.setAttribute('aria-checked', 'false');
}
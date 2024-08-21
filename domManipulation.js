/*
Create a web app that contains two lists side by side.
Each list name must be at the end of the amount of items.
Load an initial list of ToDos for each list when the page is loaded

First list
-Buy eggs
-Do laundry
-Buy facturas for Seba
Second list
-Sleep
-Eat
-Code
-Repeat



The last list item must be an empty item allowing users to add a new item to that list. It must have a button on the right side with the text “Add”
Allow users to delete items, with a button to the right with the text “Delete”
Extra: alert users to see if they are sure
Manage variable amount of lists.
(Do not copy from Notion, use provided snapshot as reference).

Add a button to toggle light/dark mode.
Do not duplicate html code.
*/

const addContainer = document.querySelector('.add-container')
let firstList = ['Buy eggs', 'Do laundry', 'Buy facturas for Seba']
let secondList = ['Sleep', 'Eat', 'Code', 'Repeat']

function renderTodoList(listId, toDos) {
    let listElement = document.getElementById(listId);
    if (!listElement){
        let div = document.createElement('div')
        div.classList.add('list-container')
        let list = document.createElement('ul')
        list.setAttribute('id', listId)
        div.append(list)
        document.querySelector('main').append(div)
        listElement = document.getElementById(listId);
    }
    listElement.innerHTML = '';

    toDos.forEach(function(toDo) {
        let listItem = document.createElement('li');
        listItem.textContent = toDo;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button')
        deleteButton.textContent ='x'
        deleteButton.addEventListener('click', function() {
            
        });

        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);

    });

    let btnItem = document.createElement('li');

    let addInput = document.createElement('input');
    addInput.setAttribute('type', 'text');
    addInput.setAttribute('placeholder', 'To do...');
    addInput.classList.add('add-input');
    addInput.classList.add(listId + '-input')
    btnItem.appendChild(addInput);

    let addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.classList.add('add-button');
    addButton.classList.add(listId + '-button');
    addButton.addEventListener('click', function() {
        let newTodo = addInput.value.trim();
        if (newTodo) {
            toDos.push(newTodo);
            renderTodoList(listId, toDos);
        }
    });

    btnItem.appendChild(addButton);
    listElement.appendChild(btnItem);

}

window.addEventListener("load", function(){
    renderTodoList('first-list',firstList);
    renderTodoList('second-list', secondList);

});



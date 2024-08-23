/*
Extra: alert users to see if they are sure
Add a button to toggle light/dark mode.
*/
let toggleButton = document.querySelector('.mode-button')
let lists = [
  ["Buy eggs", "Do laundry", "Buy facturas for Seba"],
  ["Sleep", "Eat", "Code", "Repeat"]
];

function renderTodoList(listId, list) {
  let listElement = document.getElementById(listId);
  listElement = createListIfNotExists(listElement, listId);
  listElement.innerHTML = "";

  list.forEach(function (toDo) {
    let listItem = document.createElement("li");
    listItem.textContent = toDo;
    let deleteButton = createDeleteButton(list);
    listItem.appendChild(deleteButton);
    listElement.appendChild(listItem);
  });

  let addListItem = createButtonListItem(listId, list);
  listElement.appendChild(addListItem);
}

function createListIfNotExists(listContainer, listId) {
  if (!listContainer) {
    let div = document.createElement("div");
    div.classList.add("list-container");
    let name = document.createElement("h2");
    name.classList.add("list-titles");
    name.textContent = "Lista " + parseInt(listId.substring(5), 10);
    div.append(name);
    let list = document.createElement("ul");
    list.setAttribute("id", listId);
    div.append(list);
    document.querySelector(".lists-container").append(div);
    listContainer = document.getElementById(listId);
  }
  return listContainer;
}

function createButtonListItem(listId, list) {
  let addListItem = document.createElement("li");

  let addInput = document.createElement("input");
  addInput.setAttribute("type", "text");
  addInput.setAttribute("placeholder", "To do...");
  addInput.classList.add("add-input");
  addListItem.appendChild(addInput);

  let addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.classList.add("add-button");
  addButton.addEventListener("click", function () {
    let newTodo = addInput.value.trim();
    if (newTodo) {
      list.push(newTodo);
      renderTodoList(listId, list);
    }
  });
  addListItem.appendChild(addButton);
  return addListItem;
}
function createDeleteButton(list) {
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.classList.add("fa-solid");
  deleteButton.classList.add("fa-xmark");
  deleteButton.classList.add("fa-sm");
  deleteButton.addEventListener("click", function () {
    let listItem = this.parentNode;
    let listElement = listItem.parentNode;
    let listIndex = 0;
    for (let i = 0; i < listElement.children.length; i++) {
      if (listElement.children[i] === listItem) {
        listIndex = i;
        break;
      }
    }
    let listId = listElement.id;
    let listIdNumber = parseInt(listId.substring(5), 10) - 1;
    let updatedList = list.filter(function (_, index) {
      return index !== listIndex;
    });
    lists[listIdNumber] = updatedList;
    renderTodoList(listId, updatedList);
  });
  return deleteButton;
}
toggleButton.addEventListener('click', function(){
    let btnIcon = document.querySelector('i')
    document.querySelector('body').classList.toggle('dark-body')
    btnIcon.classList.toggle('fa-moon')
    btnIcon.classList.toggle('fa-sun')
})

window.addEventListener("load", function () {
  for (let i = 0; i < lists.length; i++) {
    let listId = "list-" + (i + 1);
    renderTodoList(listId, lists[i]);
  }
});

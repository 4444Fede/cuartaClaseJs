/*
Bootcamp 2024
Javascript 
EVENTOS
Consigna:
Aplica todo lo aprendido hasta el momento. Podes investigar por tu cuenta y agregar lo que creas necesario

Ejercicio 1: Manejar Evento para Mostrar un Mensaje: Selecciona un botón con el id "show-message" y agrega un evento click que muestre un mensaje de alerta diciendo "¡Hola, mundo!".
*/

let btn = document.getElementById("show-message");
btn.addEventListener("click", function () {
  alert("Hola, mundo!");
});

/*
Ejercicio 2: Cambiar el Color de Fondo al Hacer Clic: Selecciona el body y agrega un evento que cambie su color de fondo al color que prefieras.
*/

let body = document.querySelector("body");
body.addEventListener("click", function () {
  body.style.backgroundColor = "aquamarine";
});

/*
Ejercicio 3: Cambiar Texto al Hacer Clic: Selecciona un párrafo con la clase "click-text" y agrega un evento que cambie su texto a "Has hecho clic aquí".
*/

let clickText = document.getElementById("click-text");
clickText.addEventListener("click", function () {
  clickText.innerText = "Has hecho click aqui";
});

/*
Ejercicio 4: Cambiar el Valor de un Input al Cambiarlo: Selecciona un input de texto y crea un elemento párrafo el cual agreguemos lo que vamos escribiendo en el input.
*/

let inputText = document.getElementById("text-input");
let changeableText = document.getElementById("changeable-text");
inputText.addEventListener("input", function (event) {
  changeableText.innerText = event.target.value;
});

/*
Ejercicio 5: Validar Formulario al Enviarlo: Selecciona un formulario con el id "signup-form" que tenga 2 inputs y agrega un evento que al enviar el formulario valide si los campos están completos. Si no lo están, muestra un mensaje de error.
*/

let signupInputOne = document.getElementById("signup-input-one");
let signupInputTwo = document.getElementById("signup-input-two");
let signupForm = document.getElementById("signup-form");
let inputOneOkay = false;
let inputTwoOkay = false;
signupInputOne.addEventListener("input", function (event) {
  if (event.target.value.trim() !== "") {
    inputOneOkay = true;
  } else {
    inputOneOkay = false;
  }
});
signupInputTwo.addEventListener("input", function (event) {
  if (event.target.value.trim() !== "") {
    inputTwoOkay = true;
  } else {
    inputTwoOkay = false;
  }
});
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputOneOkay && inputTwoOkay) {
    alert("El formulario sera enviado");
    signupForm.submit();
  } else {
    alert("Complete los campos vacios");
  }
});

/*
Ejercicio 6: Evento para Mostrar un Mensaje al Cargar la Página: Agrega un evento al body que muestre un mensaje en consola diciendo "La página se ha cargado".
*/

window.addEventListener("load", function () {
  console.log("La pagina se ha cargado");
});

/*
Ejercicio 7: Agregar Elemento a la Lista al Hacer Clic: Selecciona un botón con el id "add-item" y agrega un evento que añada un nuevo elemento li a una lista con la clase "item-list".
*/

let list = document.getElementById("list-items");
let addItem = document.getElementById("add-item");
let item = 0;
addItem.addEventListener("click", function () {
  let itemList = document.createElement("li");
  itemList.classList.add("item-list");
  item = Math.floor(Math.random() * 100);
  itemList.innerText = item;
  list.append(itemList);
});

/*
Ejercicio 8: Prevenir el Comportamiento por Defecto al Enviar Formulario: Selecciona un formulario con el id "contact-form" y agrega unos eventos para evitar que el formulario se envíe, y luego muestra un mensaje diciendo "El envío del formulario ha sido detenido".
*/

let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("El envío del formulario ha sido detenido");
});

/*
Ejercicio 9: Contar y Mostrar Clics en un Botón: Selecciona un botón con la clase "count-button" y agrega un evento que cuente cuántas veces se ha hecho clic en él, mostrando el total en un span con el id "click-count".
*/

let spanCount = document.getElementById("click-count");
let btnAdd = document.getElementById("count-button");
let count = 0;
btnAdd.addEventListener("click", function () {
  count++;
  spanCount.innerText = "clicks: " + count;
});

/*
Ejercicio 10: Validar Email en un Formulario: Selecciona un formulario con el id "email-form" y agrega un evento que valide que el campo de email contiene un formato válido antes de enviarlo.
*/

let mailForm = document.getElementById("email-form");
let mailInput = document.getElementById("mail-input");
let validMail = false;
mailInput.addEventListener("input", function (event) {
  if (event.target.value.includes("@")) {
    validMail = true;
  } else {
    validMail = false;
  }
});
mailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validMail) {
    alert("El formulario sera enviado");
  } else {
    alert("Mail invalido");
  }
});

/*
Ejercicio 11: Evento para Mostrar/Ocultar Contenido: Selecciona un botón con el id "toggle-content" y un div con la clase "content-box", y agrega un evento que muestre o oculte el contenido del div al hacer clic.
*/

let toggleButton = document.getElementById("toggle-content");
let contentDiv = document.querySelector(".content-box");
toggleButton.addEventListener("click", function () {
  contentDiv.classList.toggle("no-mostrar");
});

/*
Ejercicio 12: Prevenir el Comportamiento por Defecto en un Enlace: Selecciona un enlace con la clase "no-default" y agrega un evento para evitar que el enlace navegue a otra página, mostrando en su lugar un mensaje en consola.
*/

let youtubeLink = document.querySelector(".no-default");
youtubeLink.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("No te fuiste a yutub");
});

/*
Ejercicio 13: Cambiar el Estilo de un Elemento: Selecciona un botón con el id "add-class" y un párrafo con la clase "text". Agrega un evento que añada una clase "highlight" al párrafo y que cambie su estilo (A lo que gustes).
*/

let btnHighlight = document.getElementById("add-class");
let highlightText = document.querySelector(".text");
btnHighlight.addEventListener("click", function () {
  highlightText.classList.toggle("highlight");
});

/*
Ejercicio 14: Alternar Contenido de Texto: Selecciona un botón con el id "toggle-text" y un párrafo con la clase "text-toggle". Agrega un evento que cambie el texto del párrafo entre "Texto 1" y "Texto 2".
*/

let btnToggleText = document.getElementById("toggle-text");
let toggeableText = document.querySelector(".text-toggle");
let text1 = "Pijurria";
let text2 = "Tomas de mis genitales";
btnToggleText.addEventListener("click", function () {
  if (toggeableText.innerText === text1) {
    toggeableText.innerText = text2;
  } else {
    toggeableText.innerText = text1;
  }
});

/*
Ejercicio 15: Agregar Contenido HTML Dinámicamente: Selecciona un botón con el id "add-html" y un div con la clase "container". Agrega un evento click que inserte un bloque de HTML dentro del div.
*/

let btnAddHtml = document.getElementById("add-html");
let containerOfHtml = document.querySelector(".container");
btnAddHtml.addEventListener("click", function () {
  let newBlock = document.createElement("article");
  newBlock.innerText = Math.floor(
    Math.random() * 100000000000000000000000000000090
  );
  containerOfHtml.append(newBlock);
});

/*
Ejercicio 16: Crear y Agregar un Nuevo Elemento al DOM: Selecciona un botón con el id "create-element". Agrega un evento que cree un nuevo párrafo p con el texto "Elemento creado" y lo añada al final de un div con la clase "content".
*/

let btnCreateElement = document.getElementById("create-element");
let divContent = document.querySelector(".content");
btnCreateElement.addEventListener("click", function () {
  let newBlock = document.createElement("span");
  newBlock.innerText = " Elemento creado ";
  divContent.append(newBlock);
});

/*
Ejercicio 17: Cambiar el Color de Fondo de Múltiples Elementos: Selecciona todos los elementos li dentro de una lista con la clase "color-list" y un botón con el id "change-color". Agrega un evento que cambie el color de fondo de cada li
*/

let changeColorBtn = document.getElementById("change-color");
let listaColores = document.querySelectorAll(".color-list");
changeColorBtn.addEventListener("click", function () {
  listaColores.forEach(function (item) {
    item.style.backgroundColor = "red";
  });
});

/*
Ejercicio 18: Crear una Lista de Ítems Dinámicamente: Selecciona un botón con el id "create-list". Agrega un evento que cree una nueva lista ul y añada cinco elementos li dentro de ella, agregando la lista al final de un div con la clase "list-container".
*/

let btnCreateList = document.getElementById("create-list");
let listContainer = document.querySelector(".list-container");
btnCreateList.addEventListener("click", function () {
  let newUl = document.createElement("ul");
  for (i = 1; i <= 5; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = `Elemento ${i}`;
    newUl.append(newLi);
  }
  listContainer.append(newUl);
});

/*
Ejercicio 20: Cambiar el Tamaño de un elemento HTML: Selecciona un elemento con el id "resize-image" y agrega un evento que cambie su estilo.
*/

let imgHtml = document.getElementById("resize-image");
imgHtml.addEventListener("click", function () {
  imgHtml.classList.toggle("resize-img");
});

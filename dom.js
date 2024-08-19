/*
Consigna:
Aplica todo lo aprendido hasta el momento. Podes investigar por tu cuenta y agregar lo que creas necesario

Ejercicio 1: Seleccionar un Elemento y Agregar una Clase
Consigna: Selecciona del DOM el elemento p que tiene la clase "intro" y agrégale una nueva clase llamada "highlight".
*/

let introElement = document.querySelector(".intro");
introElement.classList.add("highlight");

/*
Ejercicio 2: Seleccionar un Elemento por ID y Cambiar su Texto
Consigna: Selecciona del DOM el elemento con el id "header-title" y cambia su texto a "Nuevo Título".
*/

let headerTitle = document.getElementById("header-title");
headerTitle.innerText = "Nuevo Titulo";

/*
Ejercicio 3: Seleccionar Múltiples Elementos y Agregar una Clase
Consigna: Selecciona todos los elementos li dentro de una lista y mostrarlos en consola
*/

let elementosUl = document.querySelectorAll("li");
console.log(elementosUl);
elementosUl.forEach(function (elemento) {
  elemento.classList.add("clase2");
});

/*
Ejercicio 4: Eliminar una Clase de un Elemento
Consigna: Selecciona del DOM el elemento con la clase "warning" y elimínale esa clase.
*/

let elementoWarning = document.querySelector(".warning");
elementoWarning.classList.remove("warning");

/*
Ejercicio 6: Seleccionar y Cambiar el Contenido de Texto
Consigna: Selecciona del DOM el elemento h1 que tiene la clase "main-title" y cambia su texto a "¡Bienvenidos!".
*/

let h1Title = document.querySelector(".main-title");
h1Title.innerText = "¡Bienvenidos!";

/*
Ejercicio 7: Seleccionar por ID y Cambiar el Color de Fondo
Consigna: Selecciona del DOM el elemento con el id "footer" y cambia su color de fondo(El que quieras).
*/

let footerElement = document.getElementById("footer");
footerElement.style.backgroundColor = "yellow";

/*
Ejercicio 8: Seleccionar y Agregar Contenido Adicional
Consigna: Selecciona del DOM el elemento div con la clase "content" y agrega dentro de él un nuevo párrafo que diga "Contenido adicional" (O lo que quieras que diga).
*/

let adicionalElement = document.querySelector("div.content");
adicionalElement.innerText = "el pijurrion";

/*
Ejercicio 10: Verificar y Mostrar si un Elemento Tiene una Clase
Consigna: Selecciona del DOM el elemento con la clase "header" y muestra en la consola si tiene la clase "sticky".
*/

let headerElement = document.querySelector(".header");
console.log(headerElement.classList.contains("sticky"));

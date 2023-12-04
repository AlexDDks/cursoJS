// MÉTODOS DEL DOM

// Definición del DOM: Document Object Model (DOM), esta es una interfaz que representa la estrucutra de una página we en forma de árbol y jerárquica. Cada elemento HTML es considerado un NODO del arbol. Mediante JS podemos interactuar con los elementos del DOM, con la finalidad de : modifica el contenido, estrucutra y el estilo.

// ------------------------------------------
// MÉTODOS NATIVOS DEL DOM
// a) Seleccionar elementos del DOM
// - getElementById(): Selecciona un elemento único por su atributo Id
// Sintaxis:
// document.getElementById();
let encabezado = document.getElementById("encabezado");

// - getElementByClassName(): Retorna una colección de TODOS los elementos que tienen una clase específica.
// Sintaxis:
// document.getElementByClassName();
let mensajes = document.getElementsByClassName("mensaje");

// - getElementByTagName(): Este método obtiene elementos por su etiqueta nativa
// Sintaxis
// document.getElementByTagName();
let parrafos = document.getElementsByTagName("p");

// -------------------------------------------
// b) Manipulación de nodos
// - textContent : cambia contenidos: 
// Sintaxis:
// elemento.textContent = "Contenido"
// encabezado.textContent = "Nuevo Encabezado"

// -innerText: reemplaza contenidos
// Sintaxis:
// elemento.innerText = "Contenido"
// encabezado.innerText = "Nuevo Encabezado"

// - classList.add/classList.remove : Agregan o eliminan clases
// Sintaxis:
// elemento.classList.add("clase")
// elemento.classList.remove("clase")
// encabezado.classList.add("active");
// encabezado.classList.remove("active");

// ------------------------------------------
// c) Elementos

// - document.createElement(): Crea un nuevo nodo para ser insertado en el DOM
// Sintaxis:

// let nuevoElemento = document.createElement("etiquetaNativa"); Creamos un nuevo elemento
// nuevoElemento.textContent = "Contenido del contenedor"; Insertando contenido al elemento
// // Para insertar elementos dentro de un nodo padre utilizamos el método appendChild()
// document.nodoPadre.appenchido(nuevoElemento)

// let nuevoDiv = document.createElement("div");
// nuevoDiv.textContent = "DIV INSERTADO POR APPENDCHILD c:";
// // document.body.appendChild(nuevoDiv);

// // Para insertar un nodo antes de uno de referencia:
// let referencia = document.getElementById("referencia");
// document.body.insertBefore(nuevoDiv, encabezado);

// - Para eliminar un elemento utilizamos el método remove();
// let encabezado = document.getElementById("encabezado");
// encabezado.remove();
// document.getElementById("encabezado").remove();

// ---------------------------------------------
// d) Eventos: click, mouseover, load, submit, entre otros. Estos eventos son detonadores y trabajan A LA PAR de manejadores de eventos:

// - Manejadores de eventos:
//     addEventListener():
//     Sintaxis: nodo.addEventListener("detonador", funcionAEjecutar)

function funcionClick() {
    console.log("EL botón fue presionado");
}

let boton = document.getElementById("miBoton");
boton.addEventListener("click", funcionClick);

// Para eliminar un manejador de eventos, usamos el método removeEventListener():
// Sintaxis:
// nodo.removeEventListener("detonador", funcionAEliminar)
// boton.removeEventListener("click", funcionClick)





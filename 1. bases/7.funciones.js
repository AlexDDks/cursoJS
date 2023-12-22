// FUNCIONES
// 1. ¿QUÉ ES UNA FUNCIÓN? En el contexto de JS, una función es un bloque de código diseñado para realizar una tarea específica. Se define una vez y luego se puede invocar (llamar/ejecutar) en cualquier parte del script tantas veces como sea necesario

// ------------------------------------------------------
// 1.1 FUNCIONES DECLARADAS: Una función declarada se define usando la palabra clave function seguida del nombre de la función. Las funciones declaradas se "izan" (hoisting), lo que significa que pueden ser invocadas antes de su declaración en el código.

// // SINTAXIS
// function nombreDeLaFuncion(parámetrosOpcionales) {
//     // Cuerpo de la función
// }

// // EJEMPLO DE FUNCIÓN
// function saludar() {
//     console.log("¡Hola!");
// }

// SCOPE DE VARIABLES Y FUNCIONES EN LA FUNCIÓN DECLARADA: Cualquier variable o función definida dentro de una función no es accesible fuera de ella.
// EJEMPLO DE SCOPE DE FUNCIÓN
function miFuncion() {
    var variableLocal = "Hola";
    // variableLocal es accesible aquí
}
// variableLocal no es accesible aquí, fuera de miFuncion



// ------------------------------------------------------
// // 1. EJECUTAR/LLAMAR/INVOCAR A UNA FUNCIÓN: Declarar una función no la ejecuta, simplemente nombra la función y especifica qué hacer cuando se llama a la función.

// // Para ejecutar la función, la "llamas/ejecutas/invocas" por su nombre seguido de paréntesis.

// // EJEMPLO DE EJECUCIÓN
// saludar(); // Esto imprimirá "¡Hola!" en la consola.


// ------------------------------------------------------
// // 1.3 PARÁMETROS Y ARGUMENTOS
// // Los parámetros son la lista de variables que recibe una función, Los argumentos son los valores que se pasan a la función cuando ésta es invocada

// function saludarPersona(nombre) { //Acá nombre es un parámetro que puede tomar cualquier valor
//     console.log("¡Hola, " + nombre + "!");
// }
// saludarPersona("Carlos"); // Imprime "¡Hola, Carlos!" //Al ejecutar la función con el argumento carlos, el parámetro nombre toma ese valor.

// ------------------------------------------------------
// 1.4 EL RETORNO
// Las funciones pueden devolver valores usando la palabra clave return, las cuales pueden ser utilizadas en otras partes del código, lo cual es imprescindible para el uso del resultado del código en el cuerpo de la función, de lo contrario, cualquier función invocada sin return, tiene un valor undefined.
// La diferencia con el console.log, es que este método muestra valores por consola, más no el retorno de la función

// // Ejemplo:
// function sumar(a, b) {
//     return a + b;
// }
// let resultado = sumar(5, 3); // resultado es 8 ya que hemos indicado que el retorno de la función será la suma aritmética de 2 parámetros.

// // Uso de return: Útil cuando necesitas el resultado de la función para usarlo más tarde en tu código.
// // Uso de console.log: Bueno para depuración o para mostrar información, pero no pasa el resultado de la función a otras partes de tu código.


// ------------------------------------------
// 1.5 FUNCIONES EXPRESADAS
// Una función expresada es una función asignada como valor a una variable, por lo tanto se dice ser anónima al no tener un nombre. No se izan (no hoisting), por lo que solo se pueden utilizar después de su declaración.

// // SINTAXIS
// const nombreDeLaFuncion = function(parametro1, parametro2) {
//     // Cuerpo de la función
// };

// // Ejemplo:
// let despedir = function() {
//     console.log("¡Adiós!");
// };

// despedir();



// // -------------------------------------------
// // 1.6 FUNCIONES FLECHA
// // Proporcionan una sintaxis más corta para escribir expresiones de funciones, no necesariamente tienen que ser asignadas a una variable, pero es una práctica común.

// // SINTAXIS
// const nombreDeLaFuncion = (parametro1, parametro2) => {
//     // Cuerpo de la función
// };

//           // PARÁMETROS   RETORNO     CÓDIGO
// const restar = (a, b)       =>        a - b;
// let diferencia = restar(10, 6); // diferencia es 4
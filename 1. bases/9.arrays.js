// 1. ARRAYS EN JAVASCRIPT: Un array es una lista ordenada de valores. Cada valor en un array se llama elemento, y cada elemento tiene una posición en el array, conocida como su índice, empezando por 0. Pueden contener varios tipos de datos, incluyendo números, cadenas de texto, objetos, e incluso otros arrays.


// ----------------------
// 1.1 CREACIÓN DE UN ARRAY
// 1.1.1 SINTAXIS LITERAL: Es la forma más común de crear un array. Se define entre corchetes [], y sus elementos están separados por comas.

// SINTAXIS:
// let array = [valor1, valor2, valor3];

// // Ejemplo:
// let miArray = [1, 2, 3, "cuatro", "cinco", true];

// // 1.1.2 CONSTRUCTOR ARRAY: También puedes crear un array utilizando el constructor Array.
// // SINTAXIS:
// let Array = new Array(valor1, valor2, valor3);

// // EJEMPLO:
// let otroArray = new Array(1, 2, 3, "cuatro");


// ----------------------------------------------------
// 1.2 ACCESO A ELEMENTOS DE UN ARRAY: Puedes acceder a los elementos de un array utilizando índices basados en cero.

// Accede a un elemento del array usando su índice.
// SINTAXIS:
// console.log(array[indice]); 

// EJEMPLO:
// console.log(miArray[0]); // 1


// ------------------------------------------
// 1.3 MODIFICAR ELEMENTOS DE UN ARRAY: Para modificar un elemento, simplemente asigna un nuevo valor a su posición en el array.
// SINTAXIS:
// array[indice] = nuevoValor;

// EJEMPLO
// miArray[1] = 20;


// ----------------------------------------------------
// 1.4 ITERAR SOBRE UN ARRAY: Iterar sobre arrays es una operación común en JavaScript, y existen varias formas de hacerlo. Cada método tiene sus propias características y casos de uso:

// 1.4.1 ITERAR CON UN BUCLE FOR: El bucle for es la forma más tradicional de iterar sobre un array. Te permite acceder a cada elemento del array mediante su índice.

// EJEMPLO:
// let miArray2 = [1, 2, 3, 4, 5];

// for (let i = 0; i < miArray.length; i++) {
//     console.log(miArray[i]);
// }

// VENTAJAS
// Control Total: Proporciona control completo sobre el proceso de iteración, incluyendo la posibilidad de iniciar, detener o saltar elementos.
// Acceso al Índice: Permite acceder al índice del elemento actual, lo que es útil para ciertas operaciones.
// DESVENTAJAS
// Verbosidad: Requiere más código para configurar el bucle.
// Error Prone: Más susceptible a errores, como olvidar incrementar el índice o errores en la condición de parada.



// 1.4.2 ITERAR CON BUCLE FOR OF: El bucle for...of es una forma moderna y más legible de iterar sobre arrays. Proporciona una manera directa de acceder al valor de cada elemento.

// SINTAXIS:
// for (let valor of array) {
    // Código a ejecutar para cada elemento
// }

// EJEMPLO:
// for (let elemento of miArray2) {
//     console.log(elemento);
// }

// VENTAJAS
// Sintaxis Limpia y Clara: Más legible y menos propenso a errores que un bucle for tradicional.
// Enfoque en el Valor: Se centra directamente en los valores del array, sin preocuparse por los índices.
// DESVENTAJAS
// Sin Acceso al Índice: No proporciona acceso directo al índice del elemento actual.
// No Apto para Todas las Situaciones: No es ideal si necesitas modificar el array original o si necesitas el índice del elemento.



// 1.4.3 ITERAR CON MÉTODO FOR EACH: El método .forEach() ejecuta una función proporcionada una vez para cada elemento del array. Es una forma elegante y funcional de iterar sobre arrays.

// SINTAXIS
// array.forEach(function(elemento, indice, arr) {
//     // Código a ejecutar para cada elemento
// });

// elemento: El elemento actual del array que está siendo procesado durante la iteración.
// indice (opcional): El índice del elemento actual en el array.
// arr (opcional): El array sobre el cual se llama .forEach().

// // EJEMPLO:
// let numeros = [1, 2, 3, 4, 5];
// numeros.forEach(function(numero, indice) {
//     console.log(`Número ${numero} en el índice ${indice}`);
// });

// VENTAJAS
// Funcional y Declarativo: Permite un estilo de programación más funcional y declarativo.
// Claro y Conciso: Menos propenso a errores que los bucles for tradicionales.
// DESVENTAJAS
// No Puede Interrumpirse: No se puede detener o interrumpir la ejecución, excepto lanzando una excepción.
// Rendimiento: En algunos casos, puede ser ligeramente más lento que un bucle for tradicional.


// 1.4.4 ITERAR CON MÉTODO FOR MAP:Aunque el método .map() se usa principalmente para transformar arrays (creando un nuevo array con los resultados de llamar a una función en cada elemento del array original), también puede ser utilizado para iterar.

// SINTAXIS:
// let nuevoArray = array.map(function(elemento, indice, arr) {
//     // Retorna el nuevo valor para este elemento
// });

// // Funcionamiento: Crea un nuevo array con los resultados de la llamada a una función proporcionada en cada elemento del array.
// // Parámetros de la Función Callback:
// // elemento: El elemento actual que está siendo procesado en el array.
// // indice (opcional): El índice del elemento actual que está siendo procesado en el array.
// // arr (opcional): El array sobre el cual se llama .map().

// EJEMPLO:
// let numeros = [1, 2, 3, 4, 5];
// numeros.forEach(function(numero, indice, arr) {
//     console.log(`Número ${numero} en el índice ${indice}`, arr);
// });

// VENTAJAS
// Transformación y Iteración: Ideal para transformar un array mientras se itera.
// Inmutable: No modifica el array original, lo cual es una buena práctica en la programación funcional.
// DESVENTAJAS
// Crea un Nuevo Array: Si solo necesitas iterar sin crear un nuevo array, .map() puede no ser la mejor opción.
// Rendimiento: No es la opción más eficiente para solo iterar, ya que su propósito principal es la transformación de arrays.


// 1.4.5 ITERAR CON BUCLE FOR IN: Aunque no es recomendable para iterar sobre arrays debido a que también itera sobre las propiedades adicionales del array (y el orden de iteración no está garantizado), for...in se puede usar en algunos casos.

// SINTAXIS:
// for (let indice in numeros) {
//     console.log(`Índice: ${indice}, Valor: ${numeros[indice]}`);
// }

// // EJEMPLO:
// let numeros = [1, 2, 3, 4, 5];
// for (let indice in numeros) {
//     console.log(`Índice: ${indice}, Valor: ${numeros[indice]}`);
// }

// Funcionamiento: Itera sobre todas las propiedades enumerables de un objeto (que pueden incluir elementos de un array).
// Uso en Arrays: En el contexto de un array, el indice en for...in es la clave de cada elemento en el array (sus índices).


// VENTAJAS
// Itera Sobre Propiedades: Puede iterar sobre las propiedades de un objeto, incluyendo arrays.
// DESVENTAJAS
// No Recomendado para Arrays: Puede incluir propiedades adicionales que no son parte de los elementos del array.
// Orden de Iteración No Garantizado: El orden en el que se iteran los elementos no está garantizado.


// Los objetos en JavaScript son colecciones de propiedades, donde cada propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una función, que se conoce como un método.

// DEFINICIÓN DE UN OBJETO LITERAL
// Los objetos se pueden definir utilizando llaves {}.

// EJEMPLO:
// let libro = {
//     titulo: "Cien Años de Soledad",
//     autor: "Gabriel García Márquez",
//     anioPublicacion: 1967,
//     disponible: true
// };


// --------------------------------------------------
// ACCESO A LAS
// Puedes acceder a las propiedades de un objeto usando la notación de punto o la notación de corchetes.
// console.log(libro.titulo); // Muestra "Cien Años de Soledad"
// console.log(libro['autor']); // Muestra "Gabriel García Márquez"



// -------------------------------------------------------
// FUNCIONES DENTRO DEL OBJETO

// Los métodos son funciones que son propiedades de un objeto.
// Ejemplo:
// let persona = {
//     nombre: "Ana",
//     saludar: function() {
//         console.log("Hola, soy " + this.nombre);
//     }
// };
// persona.saludar(); // Muestra "Hola, soy Ana"



// -------------------------------------------------------------
// ARRAYS EN JAVASCRIPT
// Un array es una lista ordenada de valores. Cada valor en un array se llama elemento, y cada elemento tiene una posición en el array, conocida como su índice, empezando por 0.

// CREACIÓN DE UN ARRAY

// Los arrays se definen usando corchetes [].
// Ejemplo:
// let frutas = ["manzana", "banana", "cereza"];



// ----------------------------------------------------
// ACCESO A ELEMENTOS DE UN ARRAY
// Accede a un elemento del array usando su índice.
// Ejemplo:
// console.log(frutas[1]); // Muestra "banana"



// ----------------------------------------------------
// METODOS DE ARRAYS

// Los métodos de objetos y arrays en JavaScript son funciones incorporadas que te permiten manipular y trabajar con estos tipos de datos de manera eficiente.



// 1. push y pop
// push: Añade uno o más elementos al final del array.
// pop: Elimina el último elemento del array.
// Ejemplo:
// let frutas = ["manzana", "banana"];
// frutas.push("naranja"); // Añade "naranja" al final
// frutas.pop(); // Elimina "naranja"


// 2. shift y unshift
// shift: Elimina el primer elemento del array.
// unshift: Añade uno o más elementos al principio del array.
// Ejemplo:
// frutas.shift(); // Elimina "manzana"
// frutas.unshift("fresa"); // Añade "fresa" al principio


// 3. forEach
// Itera sobre todos los elementos del array.
// Ejemplo:
// frutas.forEach(fruta => {
//     console.log(fruta);
// });


// 4.map
// Crea un nuevo array con los resultados de llamar a una función en cada elemento del array.
// Ejemplo:
// let frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());


// 5. filter
// Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
// Ejemplo:
// let frutasLargas = frutas.filter(fruta => fruta.length > 5);


// reduce
// Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un único valor.
// Ejemplo:
// let suma = [1, 2, 3].reduce((total, valor) => total + valor, 0); // suma es 6



// -----------------------------------------
// MÉTODOS DE OBJETOS

// 1.Object.keys
// Devuelve un array con las claves (propiedades) de un objeto.
// Ejemplo:
// let persona = { nombre: "Ana", edad: 25 };
// let claves = Object.keys(persona); // ["nombre", "edad"]


// 2.Object.values
// Devuelve un array con los valores de las propiedades de un objeto.
// Ejemplo:
// let valores = Object.values(persona); // ["Ana", 25]


// 3. Object.entries
// Devuelve un array de pares [clave, valor] de un objeto.
// Ejemplo:
// let entradas = Object.entries(persona); // [["nombre", "Ana"], ["edad", 25]]


// 4. Object.assign
// Copia las propiedades de uno o más objetos fuente a un objeto destino.
// Ejemplo:
// let personaExtendida = Object.assign(persona, { genero: "Femenino" });

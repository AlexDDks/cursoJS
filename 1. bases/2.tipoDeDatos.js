// // -----TIPOS DE DATOS-----

// La importancia de los timpos de datos recae en que los programas puedan resolver satisfactoriamente casos como:
// let x = 16 + "Volvo";
// Esto no tiene sentido, sin embargo JS trataría al número como string

// // 1. PRIMITIVOS: Los tipos primitivos son fundamentales para las operaciones básicas y la lógica, mientras que los tipos no primitivos son esenciales para construir estructuras más complejas y manejar colecciones de datos.

// // 1.1 Undefined: Indica que una variable ha sido declarada pero no se le ha asignado un valor, al igual que una función sin return.

// // IMPORTANCIA:
// // - Ayuda a entender si una variable ha sido declarada pero no inicializada.
// // - Indica el resultado de una operación o función que no devuelve un valor específico.

// // EJEMPLO
// let noInicializada;
// console.log(noInicializada); // undefined
// function sinRetorno() {
//     let numero = 5;
//     // no hay retorno
// }
// let resultado = sinRetorno();
// console.log(resultado); // undefined


// // ----------------------------------------
// // 1.2 Null: Este valor es asignado intencionalmente para indicar la ausencia de valor o un "valor nulo". Se usa para representar "nada" o "ningún valor".

// // IMPORTANCIA:
// // - Proporciona una manera de representar intencionalmente "ningún valor" o "un valor vacío".
// // - Es útil en programación para indicar condiciones como la ausencia de un objeto o un resultado no encontrado.

// EJEMPLO:
// let vacio = null;
// console.log(vacio); // null
// function buscaUsuario(id) {
//     // Supongamos que esta función busca un usuario por ID
//     // Pero no encuentra ningún usuario con ese ID
//     return null;
// }
// let usuario = buscaUsuario(123);
// console.log(usuario); // null


// // ----------------------------------------
// // 1.3 Boolean: Representa un valor lógico que puede ser true o false. Se utiliza para toma de decisiones en la lógica de flujo, por ejemplo en condicionales y bucles.

// // IMPORTANCIA:
// // - Es fundamental para la lógica de decisión en la programación.
// // - Permite controlar el flujo del programa en estructuras condicionales como if y bucles como while.

// // EJEMPLO:
// let esMayorDeEdad = true;
// if (esMayorDeEdad) {
//     console.log("La persona es mayor de edad.");
// } else {
//     console.log("La persona no es mayor de edad.");
// }


// // ----------------------------------------
// // 1. 4 Number: Es el tipo de dato para representar tanto enteros como números de punto flotante. JavaScript utiliza una sola estructura de número de punto flotante (64-bits) para todos los valores numéricos, basada en el estándar IEEE 754, es decir que todos los números son guardados como número decimales

// // IMPORTANCIA:
// // - Esencial para realizar cálculos y operaciones matemáticas.
// // - Usado en casi todos los programas que requieren manipulación de datos numéricos.

// let entero = 42;
// let decimal = 3.14;
// let negativo = -123;
// let exponencial = 123e5;  
// let notANumber = NaN; // Especial valor Number que indica No-es-un-Número


// // ---------------------------------------
// // 1.5 String: Representa una secuencia de caracteres o texto. Puede ser definido usando comillas simples, dobles o plantillas literales (backticks).

// // IMPORTANCIA
// // - Permite manejar texto, que es una de las formas más comunes de comunicación e interacción en la programación.
// // - Usado para representar datos en forma de texto y para la interacción con el usuario.

// // let textoSimple = 'Hola';
// // let textoDoble = "Mundo";
// // let plantillaLiteral = `Hola Mundo`;
// // let text = "We are the so-called "Vikings" from the north."; //The string will be chopped to "We are the so-called ".The solution to avoid this problem, is to use the backslash escape character. The backslash (\) escape character turns special characters into string characters: "We are the so-called \"Vikings\" from the north."


// // -----------------------------------------
// // 1.6 Symbol: es un tipo de dato primitivo que se utiliza para crear identificadores únicos. Los Symbols son siempre únicos, incluso si tienen la misma descripción.

// // SINTAXIS
// let simbolo = Symbol(descripcion);

// // IMPORTANCIA: Son importantes para crear propiedades que no entran en conflicto con ninguna otra clave en un objeto, lo cual es útil para metaprogramación, como definir propiedades o métodos que no deben ser alterados o utilizados de manera inapropiada.

// let simbolo1 = Symbol("miSimbolo");
// let simbolo2 = Symbol("miSimbolo");

// console.log(simbolo1 === simbolo2); // false, aunque las descripciones sean iguales


// // ---------------------------------------
// // 1.7 BigInt: Es un tipo de dato primitivo en JavaScript que permite trabajar con números enteros muy grandes que superan el límite seguro para Number.
// // El valor máximo que puede manejar el tipo Number de forma segura es 9007199254740991, conocido también como Number.MAX_SAFE_INTEGER. Más allá de este límite, los números pueden perder precisión debido a cómo JavaScript maneja los números de punto flotante bajo el estándar IEEE 754
// // Sintaxis:

// let numeroGrande = BigInt(valor);
// // O también añadiendo n al final de un número entero literal:
// let otroNumeroGrande = 123456789012345678901234567890n;

// // IMPORTANCIA:
// // Importancia: BigInt es crucial para realizar operaciones matemáticas precisas con números extremadamente grandes, donde Number no puede manejarlos correctamente debido a las limitaciones de precisión de punto flotante.

// // EJEMPLO:
// let numeroGrande = 9007199254740991n;
// let otroNumeroGrande = 1n;
// console.log(numeroGrande + otroNumeroGrande); // 9007199254740992n



// // --------------------------------------
// // 2. NO PRIMITIVOS U OBJETOS: Todos los tipos de datos excepto los primitivos son objetos, ya que comparten ciertas características fundamentales de estos, como los métodos y propiedades.
// // 2.1 OBJETOS: En JavaScript, los objetos son colecciones de propiedades (clave-valor), donde los valores pueden contener tanto datos primitivos como otros objetos y funciones(métodos).

// // SINTAXIS
// let nombreObjeto = {
//     propiedad1: valor1,
//     propiedad2: valor2,
//     // ...
//     metodo1: function() {
//         // Código del método
//     },
//     metodo2() {
//         // Código del método (sintaxis de método abreviada)
//     }
// };

// // IMPORTANCIA:
// // Son el núcleo de la programación en JavaScript. Permiten encapsular bloques de código para su reutilización, lo que mejora la organización y legibilidad del código. Las funciones también son clave para conceptos avanzados como cierres (closures), callbacks y programación funcional.

// // // EJEMPLO
// let persona = {
//     id:1,
//     nombre: 'Alice',
//     edad: 25,
//     direccion: {
//         calle: "Av. Siempre Viva",
//         numero: 123,
//         ciudad: "Springfield",
//         pais: "USA"
//     },
//     // Métodos
//     saludar: function() {
//         console.log('Hola!');
//     }
// };

// // ----------------------------
// // 2.2 ARRAYS: Un array en JavaScript es una colección ordenada de elementos. Cada elemento en un array tiene un índice numérico, comenzando desde 0. Los arrays pueden contener cualquier tipo de dato, incluyendo números, strings, objetos, e incluso otros arrays.

// // SINTAXIS
// let nombreArray = [elemento1, elemento2, elemento3, ...];

// // IMPORTANCIA:
// // Son fundamentales para manejar colecciones de datos. Permiten almacenar y manipular una lista ordenada de elementos, lo que es crucial para tareas como el manejo de datos en aplicaciones web, operaciones con listas de elementos, y para algoritmos que necesitan almacenar y acceder a datos secuenciales.

// // EJEMPLO
// let frutas = ["manzana", "plátano", "cereza"];

// // -----------------------
// // 2.3 FUNCIONES: Una función es un objeto que encapsula código reutilizable. Se pueden invocar varias veces, con diferentes argumentos, para realizar una tarea específica.

// // SINTAXIS
// function nombreFuncion(parametro1, parametro2) {
//     // Código a ejecutar
//     return valor; // Opcional
// }

// // EJEMPLO
// function suma(a, b) {
//     return a + b;
// }
// console.log(suma(5, 3)); // 8

// // -----------------------------
// // 2.4 FECHAS: El objeto Date en JavaScript se utiliza para trabajar con fechas y horas.

// // SINTAXIS
// let fecha = new Date();

// // IMPORTANCIA:
// // Es esencial para manejar fechas y horas. Esto es crucial en muchas aplicaciones web y de servidor, como reservas de citas, cronometraje de eventos, seguimiento de fechas de publicación de contenido, y para la manipulación de fechas y horas en la lógica de negocios.

// // EJEMPLO:
// let hoy = new Date();
// console.log(hoy); // Muestra la fecha y hora actual

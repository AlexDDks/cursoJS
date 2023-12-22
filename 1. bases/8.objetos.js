// 1. OBJETOS EN JS

// Los objetos en JavaScript son colecciones de propiedades, donde cada propiedad es una asociación entre un nombre (o clave) y un valor. Un valor de propiedad puede ser una función, que se conoce como un método.

// 1.1 CREACIÓN DE UN OBJETO EN JS

// ----------------------------------------
// 1.1.1 CREACIÓN CON SINTAXIS LITERAL: Es la forma más directa y simple de crear un objeto. Esto se hace definiendo las propiedades y métodos del objeto entre llaves

// SINTAXIS
// let objeto = {
//     propiedad1: valor1,
//     propiedad2: valor2,
//     metodo1: function() {
//         // código
//     }
// };

// EJEMPLO:
// let libro = {
//     titulo: "Cien Años de Soledad",
//     autor: "Gabriel García Márquez",
//     anioPublicacion: 1967,
//     disponible: true
// };


// ---------------------------------
// 1.1.2 CREACIÓN CON OBJETO CONSTRUCTOR: Este método utiliza el constructor Object para crear un objeto vacío y luego le añade propiedades y métodos
// SINTAXIS

// Aquí, new Object() crea un objeto vacío, y luego se añaden las propiedades propiedad1 y propiedad2
// let objeto = new Object();
// objeto.propiedad1 = valor1;
// objeto.propiedad2 = valor2;


// ------------------------------------------
// 1.1.3 CREACIÓN CON FUNCIÓN CONSTRUCTORA
// Para crear una función constructora, generalmente se sigue una convención de nombrado con la primera letra en mayúscula. La función define las propiedades y métodos que tendrán los objetos creados a partir de ella.

// SINTAXIS
// Aquí, MiObjeto es una función constructora que define un "tipo" de objeto con propiedad1 y propiedad2. Luego, usamos new MiObjeto para crear una instancia de este tipo de objeto. En una función constructora, this se refiere al objeto que se crea y devuelve por la función constructora.
// function MiObjeto(propiedad1, propiedad2) {
//     this.propiedad1 = propiedad1;
//     this.propiedad2 = propiedad2;
// }
// let objeto = new MiObjeto("valor1", "valor2");

// // EJEMPLO
// function Perro(raza, color) {
//     this.raza = raza;
//     this.color = color;
//     this.ladrar = function() {
//         return "Guau!";
//     };
// }
// let objeto2 = new Perro("Schnauzer", "gris");
// console.log(objeto2);

// // EJEMPLO 2
// function Libro(titulo, autor, anoPublicacion) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.anoPublicacion = anoPublicacion;
//     this.informacionLibro = function () {
//         return "titulo: " + this.titulo  +", autor: " +  this.autor + ", anoPublicacion: "+this.anoPublicacion
//     }
// }
// let libro = new Libro("El coronel no tiene quien le escriba", "No sé", 1992);
// console.log(libro.informacionLibro());

// ------------------------------------------
// 1.2 ¿CUÁL MÉTODO USAR?
// Sintaxis Literal: Es la más común para crear objetos simples y no requiere instanciar. Es rápida, legible y directa.

// Constructor Object: Es menos común para la creación de objetos simples, pero útil para entender la naturaleza dinámica de los objetos en JavaScript.

// Funciones Constructoras: Son ideales cuando necesitas múltiples instancias de un objeto con la misma estructura, facilitando la reutilización de código y la organización.


// ------------------------------------
// 1.3 ACCEDER A PROPIEDADES DE OBJETOS: Puedes acceder a las propiedades de un objeto usando la notación de punto o la notación de corchetes.

// // 1.3.1 NOTACIÓN DE PUNTO
// // EJEMPLO:
// let objeto = {
//     propiedad1: "valor1",
//     propiedad2: "valor2"
// };
// console.log(objeto.propiedad1); // "valor1"

// // 1.3.2 NOTACIÓN DE CORCHETES
// let nombrePropiedad = "propiedad2";
// console.log(objeto["nombrePropiedad"]); // "propiedad2"

// 1.3.3 DIFERENCIAS:
// Notación de Punto: Se utiliza cuando se conoce el nombre exacto y fijo de la propiedad, y este nombre es un identificador válido en JavaScript. Por ejemplo: persona.nombre.

// Notación de Corchetes: Se utiliza cuando el nombre de la propiedad es dinámico o está almacenado en una variable. En el bucle for...in, cada propiedad del objeto se recorre de manera dinámica, por lo que necesitas usar la notación de corchetes para acceder a sus valores. Por ejemplo: persona[clave].

// ----------------------------------------
// 1.3.4 ITERACIONES SOBRE PROPIEDADES DE OBJETO: Puedes usar bucles para iterar sobre todas las propiedades de un objeto.

// 1.3.4.1 Bucle "for...in" :el bucle recorre las propiedades del objeto y en cada iteración, la variable del bucle (por ejemplo, clave) recibe el nombre de la propiedad actual. Luego, puedes usar esta variable para acceder al valor de la propiedad.

// // SINTAXIS
// for (let clave in objeto) { //donde clave es la clave actual del bucle y objeto el objeto en cuestión
//     // Código a ejecutar en cada propiedad
// }

// // EJEMPLO:
// let persona = {
//     nombre: "Ana",
//     edad: 28,
//     profesion: "Ingeniera"
// };

// for (let clave in persona) {
//     console.log(clave + ": " + persona[clave]);
//     // La razón por la cual no utilicé la notación de punto como en persona.clave, es porque la notación de punto requiere que el nombre de la propiedad sea conocido y fijo en el momento de escribir el código. En un bucle for...in, el nombre de la propiedad está contenido en una variable (clave en este caso), y su valor cambia en cada iteración del bucle.
// }


// ---------------------------------
// 1.3.5 MODIFICAR Y AGREGAR PROPIEDADES: Puedes cambiar el valor de las propiedades de un objeto directamente.
// objeto.clave = "valor";

// // Los objetos en JavaScript son dinámicos, lo que significa que puedes agregar nuevas propiedades en cualquier momento.
// objeto.nuevaClave = "valor2";

// // Utiliza la palabra clave delete para eliminar propiedades de un objeto.
// delete objeto.nuevaClave
// console.log(objeto.nuevaClave ); // undefined

// // EJEMPLO
// let persona = {
//     nombre:"alex"
// }
// persona.nombre="carlos"
// persona.edad = 20;
// delete persona.edad
// console.log(persona);


// -------------------------------------------------------
// 1.4 FUNCIONES DENTRO DEL OBJETO: Los métodos son funciones que son propiedades de un objeto.

// Ejemplo:
// let persona = {
//     nombre: "Ana",
//     saludar: function() {
//         console.log("Hola, soy " + this.nombre);
//     }
// };
// persona.saludar(); // Muestra "Hola, soy Ana"


// ------------------------------------

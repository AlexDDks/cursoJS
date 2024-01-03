// 1. DESTRUCTURACIÓN/DESTRUCTURING: La desestructuración es una forma eficiente de extraer múltiples valores de datos almacenados en objetos y arreglos.

// 1.1 Desestructuración de Objetos
// Sintaxis Básica:

// const objeto = { a: 1, b: 2, c: 3 };
// const { a, b, c } = objeto;

// Donde:
// { a, b, c } es la parte de desestructuración que crea tres variables nuevas a, b, y c.
// Cada variable se asigna al valor correspondiente del objeto; por ejemplo, a se asigna a objeto.a, b a objeto.b, y así sucesivamente.

// - Nombres de Variables Personalizados:
// Si quieres extraer una propiedad y asignarla a una variable con un nombre diferente, puedes hacerlo así:
// const objeto = { a: 1, b: 2, c: 3 };
// const { a: alpha, b: beta, c: gamma } = objeto;
// // alpha es 1, beta es 2, gamma es 3

// -Valores Predeterminados:
// Puedes asignar valores predeterminados a las variables en caso de que la propiedad no exista en el objeto:

// const objeto = { a: 1, b: 2 };
// const { a, b, c = 3 } = objeto;
// // a es 1, b es 2, c es 3


// Uso Práctico:
// La desestructuración se utiliza a menudo para extraer un subconjunto de propiedades de objetos, especialmente cuando se pasa un objeto a una función:

// function describirUsuario({ nombre, edad }) {
//     return `Nombre: ${nombre}, Edad: ${edad}`;
//   }
  
//   const usuario = { nombre: 'Ana', edad: 30, ocupacion: 'Desarrolladora' };
//   console.log(describirUsuario(usuario));
//   // Salida: Nombre: Ana, Edad: 30
  


// -------------------------------------
// 1.2 Desestructuración de Arreglos

// Sintaxis Básica:
// const arreglo = [1, 2, 3];
// const [x, y, z] = arreglo;

// // x es 1, y es 2, z es 3
// [x, y, z] es la parte de desestructuración que crea tres nuevas variables x, y, y z. Cada variable se asigna al elemento correspondiente en el arreglo basado en su posición (ya no en el nombre de la propiedad).

// -Omitir Elementos:
// Puedes omitir elementos del arreglo que no necesitas:
// const arreglo = [1, 2, 3, 4];
// const [x, , , z] = arreglo;
// // x es 1, z es 4

// - Uso con Spread Operator:
// Al desestructurar arreglos, puedes capturar todos los elementos restantes en otro arreglo usando el operador spread (...):

// const arreglo = [1, 2, 3, 4, 5];
// const [x, y, ...resto] = arreglo;
// // x es 1, y es 2, resto es [3, 4, 5]

// - Uso Real:
// La desestructuración de arreglos es muy útil cuando trabajas con funciones que devuelven arreglos, como Object.entries o al intercambiar valores:

// const [clave, valor] = Object.entries(objeto)[0];
// // Suponiendo que objeto es { a: 1, b: 2 }, clave es 'a', valor es 1

// let a = 1, b = 2;
// [a, b] = [b, a];
// // Intercambio de valores: a es 2, b es 1
// La desestructuración de arreglos también es común en el uso de iteradores, donde cada iteración devuelve un par de valores (por ejemplo, al usar un for...of loop con Map).



// ---------------------------------------------
// 2. SPREAD OPERATOR: El operador spread (...) es una adición en ES6 que permite 'expandir' elementos iterables, como arreglos, en lugares donde se esperan múltiples elementos (como argumentos en llamadas de función) o para expandir objetos en otros objetos. Aquí te explico en detalle.

// 2.1 Spread Operator en Arreglos

// Sintaxis: 
// const array1 = [1, 2, 3];
// const array2 = [...array1, 4, 5, 6]; // array2 es [1, 2, 3, 4, 5, 6]
// ...array1 'expande' los elementos de array1 dentro de array2.

// Ejemplos y usos:

// 2.1.1 Concatenación de Arreglos:
// const primos = [2, 3, 5];
// const noPrimos = [1, 4, 6];
// const numeros = [...primos, ...noPrimos]; // [2, 3, 5, 1, 4, 6]

// 2.1.2 Copiar Arreglos:
// const original = [1, 2, 3];
// const copia = [...original]; // Crea una copia superficial de 'original'

// 2.1.3 Argumentos de Función:
// function suma(a, b, c) {
//   return a + b + c;
// }
// const valores = [1, 2, 3];
// const resultado = suma(...valores); // Pasa los elementos de 'valores' como argumentos

// 2.1.4 Con strings
// const saludo = "Hola";
// const caracteres = [...saludo]; // ['H', 'o', 'l', 'a']

// 2.1.5 Combinar con Desestructuración:
// const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
// // primero es 1, segundo es 2, resto es [3, 4, 5]



// ----------------------------------
// 2.2 Spread Operator en Objetos

// Sintaxis:
// const objeto1 = { a: 1, b: 2 };
// const objeto2 = { ...objeto1, c: 3 }; // objeto2 es { a: 1, b: 2, c: 3 }
// ...objeto1 'expande' las propiedades de objeto1 dentro de objeto2.


// // Ejemplos y Usos:

// // 2.2.1 Combinar Objetos:
// const nombre = { firstName: 'John' };
// const apellido = { lastName: 'Doe' };
// const usuario = { ...nombre, ...apellido, edad: 30 };
// // usuario es { firstName: 'John', lastName: 'Doe', edad: 30 }

// 2.2.2 Clonar objetos
// const original = { a: 1, b: 2 };
// const copia = { ...original }; // Crea una copia superficial de 'original'

// 2.2.3 Sobreescribir Propiedades:
// const usuario = { nombre: 'Ana', edad: 25 };
// const usuarioActualizado = { ...usuario, edad: 26 };
// // usuarioActualizado es { nombre: 'Ana', edad: 26 }

// 2.2.4 Propiedades Dinámicas en Objetos:
// const propiedadDinamica = 'color';
// const valorDinamico = 'azul';
// const configuracion = {
//   [propiedadDinamica]: valorDinamico,
//   tamaño: 'grande'
// };
// // configuracion es { color: 'azul', tamaño: 'grande' }


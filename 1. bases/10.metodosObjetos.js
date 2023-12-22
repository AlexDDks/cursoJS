// Como hemos mencionado con anterioridad, los objetos en JavaScript son colecciones de propiedades, donde una propiedad es una asociación entre un nombre (o clave) y un valor. Una propiedad puede ser una variable que contiene un valor (como un número o una cadena de texto), o una función, en cuyo caso la propiedad se denomina método.

// 1. Métodos Importantes para Objetos en JavaScript

// 1.1 Object.keys(obj)

// Qué Hace: Retorna un array con las claves (nombres de propiedades) de un objeto. Esencial para iterar sobre las claves del objeto o verificar si contiene ciertas propiedades.

// Sintaxis: Object.keys(obj)
// Object.keys: Método utilizado.
// objeto: Objeto del cual se obtendrán las claves.

// // Ejemplo:
// let persona = { nombre: "Alex", edad: 30 };
// console.log(Object.keys(persona)); // ["nombre", "edad"]




// 1.2. Object.values(obj)

// Qué Hace: Retorna un arreglo con los valores de las propiedades de un objeto. Útil para obtener todos los valores de un objeto sin referenciar sus claves.

// Sintaxis: Object.values(objeto)
// Object.values: Método utilizado.
// objeto: Objeto del cual se obtendrán los valores.
// Ejemplo:
// console.log(Object.values(persona)); // ["Alex", 30]




// 1.3. Object.entries(obj)

// Qué Hace: Retorna un arreglo de arreglos, donde cada subarreglo es un par [clave, valor] correspondiente a las propiedades del objeto. Ideal para iterar sobre un objeto accediendo a sus claves y valores simultáneamente.

// Sintaxis: Object.entries(objeto)
// Object.entries: Método utilizado.
// objeto: Objeto del cual se obtendrán los pares [clave, valor].
// Ejemplo:
// console.log(Object.entries(persona)); // [["nombre", "Alex"], ["edad", 30]]




// 1.4. Object.assign(destino, ...fuentes)
// Qué Hace: Copia las propiedades enumerables de uno o más objetos fuente a un objeto destino. Se emplea para combinar objetos o clonar un objeto añadiendo propiedades adicionales.

// Sintaxis: Object.assign(objetoDestino, objetoFuente1, objetoFuente2, ...)
// Object.assign: Método utilizado.
// objetoDestino: Objeto al que se le asignarán las propiedades.
// objetoFuente1, objetoFuente2, ...: Objetos fuente cuyas propiedades se copiarán al objeto destino.

// Ejemplo:
// let infoAdicional = { ocupacion: "Profesor" };
// Object.assign(persona, infoAdicional);
// console.log(persona); // { nombre: "Alex", edad: 30, ocupacion: "Profesor" }





// 1.5. Object.freeze(obj)
// Qué Hace: Congela un objeto, haciendo que no se puedan añadir, eliminar o modificar sus propiedades. Útil para hacer un objeto inmutable.

// Sintaxis: Object.freeze(objeto)
// Object.freeze: Método utilizado.
// objeto: Objeto que será congelado.
// // Ejemplo:
// Object.freeze(persona);
// persona.edad = 35; // Sin efecto, objeto congelado
// console.log(persona.edad); // 30
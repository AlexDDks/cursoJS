// 1. Métodos Importantes para Arreglos en JavaScript

// 1.1 Array.forEach(callback)

// Qué Hace: Ejecuta una función proporcionada una vez para cada elemento del array.

// Sintaxis: array.forEach(function(elemento, indice, arr) {})
// array: El array sobre el cual se llama .forEach().
// function(elemento, indice, arr): Función callback que se ejecuta en cada elemento.
// elemento: El elemento actual que está siendo procesado en el array.
// indice: El índice del elemento actual.
// arr: El array sobre el cual se llama .forEach().

// Ejemplo:
// let numeros = [1, 2, 3];
// numeros.forEach(function(numero, indice) {
//     console.log(`Número ${numero} en el índice ${indice}`);
// });



// 1.2. Array.map(callback)

// Qué Hace: Crea un nuevo array con los resultados de la llamada a una función proporcionada en cada elemento del array.

// Sintaxis: let nuevoArray = array.map(function(elemento, indice, arr) {})
// array: El array original.
// function(elemento, indice, arr): Función callback que procesa cada elemento.
// elemento: El elemento actual que está siendo procesado en el array.
// indice: El índice del elemento actual.
// arr: El array sobre el cual se llama .map().

// Ejemplo:
// let duplicados = numeros.map(function(numero) {
//     return numero * 2;
// });
// console.log(duplicados); // [2, 4, 6]




// 1.3. Array.filter(callback)

// Qué Hace: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función proporcionada.

// Sintaxis: let filtrados = array.filter(function(elemento, indice, arr) {})
// array: El array original.
// function(elemento, indice, arr): Función callback que decide si incluir o no el elemento.
// elemento: El elemento actual que está siendo procesado en el array.
// indice: El índice del elemento actual.
// arr: El array sobre el cual se llama .filter().

// Ejemplo:
// let pares = numeros.filter(function(numero) {
//     return numero % 2 === 0;
// });
// console.log(pares); // [2]




// 1.4. Array.reduce(callback, valorInicial)
// Qué Hace: El método reduce aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un único valor. Es ampliamente utilizado para operaciones como sumas acumulativas, construcción de objetos a partir de arrays, entre otros.

// Sintaxis: let resultado = array.reduce(function(acumulador, elemento, indice, arr) {}, valorInicial)
// array: El array sobre el cual se aplica reduce.
// function(acumulador, elemento, indice, arr): La función callback que se ejecuta en cada elemento del array.
// acumulador: El valor acumulado que resulta de la operación hasta el momento. En la primera llamada, es igual al valorInicial si se proporciona, o al primer elemento del array si no.
// elemento: El elemento actual del array que está siendo procesado.
// indice (opcional): El índice del elemento actual que está siendo procesado.
// arr (opcional): El array sobre el cual se llama reduce.
// valorInicial (opcional): Un valor a utilizar como primer argumento en la primera llamada de la función callback. Si no se proporciona, se usa el primer elemento del array como acumulador inicial y la iteración empieza desde el segundo elemento.

// Ejemplo:
// let numeros = [1, 2, 3];
// let suma = numeros.reduce(function(acumulador, numero) {
//     return acumulador + numero;
// }, 0);
// console.log(suma); // 6




// 1.5. Array.find(callback)

// Qué Hace: Este método devuelve el valor del primer elemento del array que cumple con la función de prueba proporcionada. Si ningún elemento cumple la condición, devuelve undefined.

// Sintaxis: let encontrado = array.find(function(elemento, indice, arr) {})
// array: El array sobre el cual se aplica find.
// function(elemento, indice, arr): La función callback que se ejecuta en cada elemento del array.
// elemento: El elemento actual del array que está siendo procesado.
// indice (opcional): El índice del elemento actual que está siendo procesado.
// arr (opcional): El array sobre el cual se llama find.
// Ejemplo:
// let numeros = [1, 2, 3];
// let mayorQueDos = numeros.find(function(numero) {
//     return numero > 2;
// });
// console.log(mayorQueDos); // 3




// 1.6. Array.includes(elemento)
// Qué Hace: Determina si un array contiene un determinado elemento, devolviendo true si lo encuentra y false en caso contrario. Es una forma sencilla y directa de verificar la presencia de un elemento en un array.

// Sintaxis: let incluye = array.includes(elemento)
// array: El array en el cual se buscará el elemento.
// elemento: El elemento a buscar en el array.
// Ejemplo:

// let incluyeDos = numeros.includes(2);
// console.log(incluyeDos); // true



// Reto de JavaScript: Gestión de un Sistema de Reservaciones
// Imagina que estás desarrollando un sistema para gestionar reservaciones en un restaurante. El sistema debe manejar una lista de reservaciones, clientes y sus preferencias. Aquí está tu desafío:

// Creación de un Array de Reservaciones:
// Crea un array reservaciones donde cada elemento es un objeto que representa una reservación. Cada reservación debería tener propiedades como nombreCliente, numeroDePersonas, hora y mesaAsignada.

let reservaciones = [
    {
        nombreCliente:"Alex",
        numeroDePersonas:3,
        hora:17,
        mesaAsignada:1
    },

    {
        nombreCliente:"Lidia",
        numeroDePersonas:7,
        hora:16,
    }
];

console.log(reservaciones);

// Asignación de Mesas:
// Escribe una función que reciba el array de reservaciones y asigne una mesa a cada reservación si aún no tiene una. Puedes simplemente asignar números de mesa de forma secuencial o basada en algún criterio.

function asignarMesas(reservaciones) {
    for (let i = 0; i < reservaciones.length; i++) {
        if (!reservaciones[i].mesaAsignada) {
            reservaciones[i].mesaAsignada = i + 1; // Asigna el número de mesa
        }
    }
    console.log(reservaciones);
}

asignarMesas(reservaciones);

// Buscador de Reservaciones:
// Implementa una función que, dado el nombre de un cliente, utilice Array.find() para buscar y devolver la reservación asociada a ese cliente.
// Filtrado de Reservaciones por Hora:
function find(cliente) {
    let clienteEncontrado = reservaciones.find(function(elemento) {
        return elemento.nombreCliente == cliente;
    })    
    console.log(clienteEncontrado);
}
find("Lidia")



// Usa Array.filter() para crear una función que devuelva todas las reservaciones para una hora específica.
function hora(hora) {
    let filtrados = reservaciones.filter( function (elemento) {
        return elemento.hora == hora;
    })
    console.log("El elemento filtrado es: "+ JSON.stringify(filtrados));
}
hora(16)

// Conteo de Invitados:
// Utiliza Array.reduce() para calcular el número total de personas que se esperan en el restaurante, sumando numeroDePersonas de cada reservación.
let invitados = [];
for (let index = 0; index < reservaciones.length; index++) {
    invitados.push(reservaciones[index].numeroDePersonas)
}

const suma = invitados.reduce(function (acumulador, numero) {
       return acumulador + numero;
})

console.log(suma);


// Lista de Mesas Ocupadas:

// Emplea Array.map() para crear un array que solo contenga los números de las mesas asignadas.
// 1.2. Array.map(callback)
let mesas = reservaciones.map(function(elemento) {
    return elemento.mesaAsignada;
});

console.log(mesas);




// Verificación de Disponibilidad de Mesa:
// Implementa una función que use Array.includes() para verificar si una mesa específica ya está asignada.

let contiene = reservaciones.some(function(reservacion) {
    return reservacion.nombreCliente === "Alex";
});

console.log(contiene);


// 1.6. Array.includes(elemento)
// Qué Hace: Determina si un array contiene un determinado elemento, devolviendo true si lo encuentra y false en caso contrario. Es una forma sencilla y directa de verificar la presencia de un elemento en un array.

// Sintaxis: let incluye = array.includes(elemento)
// array: El array en el cual se buscará el elemento.
// elemento: El elemento a buscar en el array.
// Ejemplo:

// let incluyeDos = numeros.includes(2);
// console.log(incluyeDos); // true
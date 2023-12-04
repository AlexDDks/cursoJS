// FUNCIONES

// ¿Qué es una Función?

// Una función es un bloque de código diseñado para realizar una tarea específica.
// Se puede reutilizar, lo que significa que puedes llamar a la misma función varias veces.


// ------------------------------------------------------
// FUNCIONES DECLARADAS
// Una función declarada se define usando la palabra clave function seguida del nombre de la función.

// // SINTAXIS
// function nombreDeLaFuncion() {
//     // Código a ejecutar
// }

// // EJEMPLO
// function saludar() {
//     console.log("¡Hola!");
// }



// ------------------------------------------------------
// // EJECUTAR/LLAMAR A UNA FUNCIÓN

// // Declarar una función no la ejecuta, simplemente nombra la función y especifica qué hacer cuando se llama a la función .

// // Para ejecutar la función, la "llamas/ejecutas" por su nombre seguido de paréntesis.
// saludar(); // Esto imprimirá "¡Hola!" en la consola.



// ------------------------------------------------------
// // PARÁMETROS Y ARGUMENTOS
// // Los parámetros son la lista de variables que recibe una función, Los argumentos son los valores que se pasan a la función cuando ésta es invocada

// function saludarPersona(nombre) {
//     console.log("¡Hola, " + nombre + "!");
// }



// ------------------------------------------------------
// // LLAMANDO A LA FUNCIÓN
// saludarPersona("Carlos"); // Imprime "¡Hola, Carlos!"



// ------------------------------------------------------
// EL RETORNO
// Las funciones pueden devolver valores usando la palabra clave return, las cuales pueden ser utilizadas en otras partes del código.

// La diferencia con el console.log, es que este método muestra valores por consola, más no el retorno de la función

// // Ejemplo:
// function sumar(a, b) {
//     return a + b;
// }
// let resultado = sumar(5, 3); // resultado es 8


// // Uso de return: Útil cuando necesitas el resultado de la función para usarlo más tarde en tu código.
// // Uso de console.log: Bueno para depuración o para mostrar información, pero no pasa el resultado de la función a otras partes de tu código.



// ------------------------------------------
// FUNCIONES EXPRESADAS
// Una función expresada es una función asignada como valor a una variable.

// // Ejemplo:
// let despedir = function() {
//     console.log("¡Adiós!");
// };

// despedir();



// // -------------------------------------------
// // FUNCIONES FLECHA
// // Proporcionan una sintaxis más corta para escribir expresiones de funciones.

//           // PARÁMETROS   RETORNO     CÓDIGO
// const restar = (a, b)       =>        a - b;
// let diferencia = restar(10, 6); // diferencia es 4


// EJEMPLOS
// Ejemplo: Sistema de Pedidos para una Tienda de Helados
// Función para saludar al cliente
function saludarCliente() {
    console.log("¡Bienvenido a la Tienda de Helados!");
}

// Función para calcular el precio de un pedido
function calcularPrecio(cantidad, precioPorHelado) {
    return cantidad * precioPorHelado;
}

// Función para aplicar descuentos
function aplicarDescuento(precioTotal, cantidad) {
    const descuento = cantidad > 5 ? 0.1 : 0; // 10% de descuento si se compran más de 5 helados
    return precioTotal - (precioTotal * descuento);
}

// Función para tomar un pedido
function tomarPedido(cantidad, precioPorHelado) {
    saludarCliente();
    let precioTotal = calcularPrecio(cantidad, precioPorHelado);
    precioTotal = aplicarDescuento(precioTotal, cantidad);
    console.log(`El precio total de su pedido es: $${precioTotal}`);
}

// Ejecutar un pedido de ejemplo
tomarPedido(3, 2); // 3 helados a $2 cada uno
tomarPedido(6, 2); // 6 helados a $2 cada uno, con descuento

// // BLUCLE FOR Un bucle for es una estructura de control que permite ejecutar repetidamente un bloque de código mientras una condición determinada sea verdadera.

// for (inicialización; condición; incremento) {
//     // Bloque de código que se ejecuta en cada iteración
// }

// // Inicialización: Se ejecuta una sola vez antes de que comience la ejecución del bucle
// // Condición: Esta es la expresión que se evalúa antes de CADA ITERACIÓN. Si la condición es "true", el bucle continúa, sino, termina.
// // Incremento: Este se ejecuta después de cada iteración del bloque de código

// for (let i = 0; i < 11 ; i++) {
//     console.log(i);
// }

// // MEDIANTE EL BUCLE FOR. Mostrar por consola la tabla del 7. Del valor 1 al valor 100;

// // Ejemplo for
// for (let i =1; i <= 100; i++) {
//     console.log(i + ".- " +  i*7);
// }


// // Ejemplo for
// let arreglo = ["Manzana","Pera","Fresa","kiwi"];
// for (let i= 0; i < arreglo.length; i++) {
//     console.log(arreglo[i]);
// }


// // BUCLE WHILE 
// // El bucle while ejecuta un bloque de código mientras una condición especificada es true. La condición se evalúa antes de ejecutar el bloque de código.

// // Sintaxis:
// while (condicion) {
//     // bloque de código a ejecutar
//   }
  
// // Flujo de trabajo:

// // Evalúa la condición.
// // Si la condición es true, ejecuta el bloque de código.
// // Después de ejecutar el bloque de código, repite el paso 1.

// // Ejemplo bucle while
// let contador = 0;
// while (contador < 5) {
//   console.log(contador);
//   contador++;
// }

// // Ejemplo bucle do while
// // El bucle do...while es similar al bucle while, con la principal diferencia de que el bloque de código se ejecuta al menos una vez antes de evaluar la condición, ya que la condición se comprueba después de la ejecución del bloque de código.

// // Sintaxis:
// do {
//     // bloque de código a ejecutar
//   } while (condicion);
  
// //   Flujo de trabajo:

// //   Ejecuta el bloque de código.
// //   Evalúa la condición.
// //   Si la condición es true, repite el paso 1.

// // Ejemplo do while
// let contador = 0;
// do {
//   console.log(contador);
//   contador++;
// } while (contador < 5);


//CUÁNDO UTILIZAR CADA UNO DE ESTOS?
// Los bucles for, while y do...while en JavaScript tienen diferentes usos basados en la necesidad de controlar la repetición de un bloque de código. Aquí tienes una comparación y ejemplos de cuándo podrías usar cada uno:

// for Loop
// Ideal para situaciones donde sabes de antemano cuántas veces necesitas iterar.
// Ejemplo de Uso:
// Utiliza un bucle for cuando tengas un número específico de veces para iterar, como recorrer los elementos de un array.

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }


// while Loop
// Útil cuando la cantidad de iteraciones no se conoce y la decisión de detener el bucle depende de una condición que se evalúa antes de cada iteración.

// Ejemplo de Uso:
// Utiliza un bucle while cuando esperas a que cambie una condición que no depende de un contador, como esperar a que un usuario realice una acción.
// let input;
// while (input !== 'salir') {
//   input = prompt("Escribe 'salir' para terminar el bucle");
// }


// do...while Loop
// Útil cuando necesitas que el bloque de código se ejecute al menos una vez y luego continúe basado en una condición evaluada después de cada iteración.
// Ejemplo de Uso:
// Utiliza un bucle do...while cuando el bloque de código debe ejecutarse al menos una vez, como mostrar un menú de opciones al menos una vez y luego repetirlo hasta que el usuario elija salir.

// do {
//     let opcion = mostrarMenu(); // Esta función muestra el menú y devuelve la opción seleccionada
//   } while (opcion !== 'salir');
  

// Usa for cuando sepas cuántas veces necesitas iterar o cuando necesites iterar sobre una colección de elementos.
// Usa while cuando la condición para continuar el bucle pueda cambiar de maneras no lineales o impredecibles.
// Usa do...while cuando el bucle debe ejecutarse al menos una vez, independientemente de la condición inicial.


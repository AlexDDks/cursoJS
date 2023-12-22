// 1. BUCLES: son estructuras de control que repiten un bloque de código.

// // 1.1 BLUCLE FOR Un bucle for es una estructura de control que permite ejecutar repetidamente un bloque de código mientras una condición determinada sea verdadera.

// VENTAJAS:
// Efectivo para iterar sobre rangos de números, arrays y objetos.
// Proporciona tres expresiones en una sola línea (inicialización, condición de continuación, actualización).
// Es la forma más común de iterar sobre secuencias en JavaScript.

// DESVENTAJAS
// Puede ser propenso a errores si no se maneja cuidadosamente la condición de salida o la actualización de la variable de control.
// Menos flexible en comparación con while para iteraciones no deterministas previamente.

// SINTAXIS
// for (inicialización; condición; incremento) {
//     // Bloque de código que se ejecuta en cada iteración
// }

// SECUENCIA DE EJECUCIÓN
// - INICIALIZACIÓN: Se ejecuta primero y solo una vez. Aquí se establece el punto de partida del bucle. Normalmente se utiliza para inicializar una variable contador.
// - CONDICIÓN: Se evalúa antes de cada iteración del bucle. Si la condición es verdadera (true), el bucle continúa y se ejecuta el bloque de código. Si es falsa (false), el bucle termina.
// - CÓDIGO A EJECUTAR: Si la condición es verdadera, se ejecuta el bloque de código dentro del bucle.
// - INCREMENTO: Después de ejecutar el bloque de código, se ejecuta esta expresión. Generalmente se utiliza para actualizar el contador o la variable de control del bucle. Luego, se vuelve a evaluar la condición.

// // EJEMPLO FOR
// for (let i = 0; i < 11 ; i++) {
//     console.log(i);
// }
// // MEDIANTE EL BUCLE FOR. Mostrar por consola la tabla del 7. Del valor 1 al valor 100;

// // EJEMPLO FOR
// for (let i =1; i <= 100; i++) {
//     console.log(i + ".- " +  i*7);
// }

// // EJEMPLO FOR
// let arreglo = ["Manzana","Pera","Fresa","kiwi"];
// for (let i= 0; i < arreglo.length; i++) {
//     console.log(arreglo[i]);
// }


// -------------------------------------

// // 1.2. BUCLE WHILE: Al igual que el for es una estructura de control que ejecuta un bloque de código mientras una condición especificada sea true. La condición se evalúa antes de ejecutar el bloque de código.

// VENTAJAS:
// Ideal para situaciones donde no se conoce el número de iteraciones de antemano.
// Más simple que el bucle for para ciertos casos.

// DESVENTAJAS
// Riesgo de bucle infinito si la condición nunca se vuelve falsa.
// Puede ser menos intuitivo en comparación con un bucle for para iterar sobre rangos o colecciones.

// USOS:
// Cuando la cantidad de iteraciones no se conoce previamente.
// En situaciones donde la condición de terminación depende de procesos o valores que cambian durante la ejecución del bucle.

// // SINTAXIS:
// while (condicion) {
//     // bloque de código a ejecutar
//   }
  
// // SECUENCIA DE EJECUCIÓN:
// - CONDICIÓN: Se evalúa al inicio de cada iteración. Si es verdadera, el bucle continúa; si es falsa, el bucle termina.
// - CÓDIGO A EJECUTAR Se ejecuta si la condición es verdadera.
// - INCREMENTO: Normalmente al final del bloque de código, donde se actualiza la variable de control que influye en la condición.

// // EJEMPLO BUCLE WHILE
// let contador = 0;
// while (contador < 5) {
//   console.log(contador);
//   contador++;
// }

// // ---------------------------------
// // 1.3 BUCLE DO WHILE: Es una variante del bucle while que garantiza que el bloque de código se ejecute al menos una vez y luego repetir la ejecución mientras una condición especificada sea verdadera.

// VENTAJAS:
// Garantiza que el bloque de código se ejecute al menos una vez.
// Útil cuando la condición que controla el bucle depende de algo que sucede dentro del bloque de código.

// DESVENTAJAS:
// Al igual que el while, existe el riesgo de bucle infinito si la condición siempre es verdadera.
// Puede ser menos intuitivo en comparación con el bucle for para ciertos patrones de iteración.

// USOS:
// Cuando quieres que el bloque de código se ejecute al menos una vez, independientemente de la condición inicial.
// En situaciones donde la condición para continuar el bucle se determina como resultado de la ejecución del bloque de código.

// // SINTAXIS
// do {
//     // bloque de código a ejecutar
//   } while (condicion);
  
// SECUENCIA DE EJECUCIÓN:
// CÓDIGO A EJECUTAR: Se ejecuta primero, sin evaluar la condición.
// CONDICIÓN: Se evalúa después de la primera ejecución del bloque de código. Si es verdadera, el bloque se ejecuta nuevamente. Si es falsa, el bucle termina.
// Si la condición es true, repite el paso 1.

// // Ejemplo do while
// let contador = 0;
// do {
//   console.log(contador);
//   contador++;
// } while (contador < 5);


// //CUÁNDO UTILIZAR CADA UNO DE ESTOS?

// // USO DEL FOR: Ideal cuando sabes de antemano cuántas veces necesitas iterar o sobre un arreglo.
// // EJEMPLO
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// // USO DEL WHILE: Mejor para bucles donde la condición depende de algo más que un simple contador/ Esperar a que cambie un estado que no depende de un contador.
// // EJEMPLO
// while (!archivoCargado) {
//     esperaYChequeaEstado();
// }

// // USO DEL DO-WHILE: Útil cuando necesitas que el cuerpo del bucle se ejecute al menos una vez antes de evaluar la condición.
// // EJEMPLO:
// do {
//     lectura = leerDatos();
// } while (lectura.valida);

// // DÓNDE NO FUNCIONAN BIEN???
// - for no funciona bien: Cuando no sabes cuántas veces necesitas iterar y dependes de condiciones externas. COMO EN EL EJEMPLO HECHO CON WHILE DEL ARCHIVO CARGADO
// - while no es ideal: Cuando tienes un número fijo de iteraciones, ya que el for ofrece una sintaxis más concisa (sólo por esta razón).
// - do-while no es adecuado: Si es importante evaluar la condición antes de la primera ejecución del bucle, ya que do-while ejecuta su bloque al menos una vez sin importar la condición.
// // CONDICIONAL IF: La estructura if es una declaración de control de flujo en JavaScript que se utiliza para realizar decisiones lógicas en el código. Definición: if permite ejecutar un bloque de código si, y solo si, una condición específica es verdadera.

// // ¿CUÁNDO UTILIZARLO?
// // Cuando necesitas ejecutar código basado en una evaluación condicional.
// // En la validación de datos.
// // Para controlar el flujo de ejecución en función de diferentes escenarios.

// VENTAJAS
// Permite la creación de código reactivo y dinámico que responde a condiciones específicas.
// Hace el código más legible al clarificar qué condiciones conducen a ciertos resultados.
// Ayuda a prevenir la ejecución de código innecesario o erróneo.

// DESVENTAJAS
// El uso excesivo de declaraciones if anidadas puede llevar a lo que se conoce como "callback hell" o "pyramid of doom", lo que hace que el código sea difícil de leer y mantener.
// Puede conducir a errores si las condiciones no se manejan correctamente o son demasiado complejas.


// ------------------------------------
// 1.1 SINTAXIS IF
// if (condicion) {
//     // bloque de código que se ejecuta si la condición es verdadera
//   }
  
// // Ejemplo IF
// let numero1 = 0;

// if (numero1 <= 0) {
//   console.log("El número no es positivo.");
// }

// // ----------------------------------------------------------

// // ELSE Y ELSE IF: Estas son extensiones de la declaración if que permiten un control de flujo más complejo mediante la provisión de bloques de código adicionales para diferentes condiciones

// 1.2 ELSE: Se usa para especificar un bloque de código que se ejecutará si la condición if es falsa. Solo puede haber un bloque else después de un if. La declaración else se usa junto con if para ejecutar un bloque de código cuando la condición del if es false (NO ES OBLIGATORIA).

// // Sintaxis ELSE
// // if (condicion) {
// //     bloque de código que se ejecuta si la condición es verdadera
// //   } 
// //   else {
// //     bloque de código que se ejecuta si la condición es falsa
// //   }
  
// // Ejemplo IF & ELSE
// let numero = -10;
// if (numero > 0) {
//   console.log("El número es positivo.");
// } 
// else {
//   console.log("El número es negativo o cero.");
// }


// // ----------------------------------------------------------
// // 1.3. ELSE IF: Proporciona una condición adicional si la condición if original es falsa. Puedes tener múltiples declaraciones else if para verificar varias condiciones en secuencia, permite probar múltiples condiciones en secuencia.

// // SINTAXIS
// if (condicion1) {
//     // bloque de código que se ejecuta si condicion1 es verdadera
//   } 
//   else if (condicion2) {
//     // bloque de código que se ejecuta si condicion1 es falsa y condicion2 es verdadera
//   } 
//   else {
//     // bloque de código que se ejecuta si ambas condiciones, condicion1 y condicion2, son falsas
//   }

//   // Ejemplo ELSE IF
// let numero = 0;
// if (numero > 0) {
//   console.log("El número es positivo.");
// }
// else if (numero < 0) {
//   console.log("El número es negativo.");
// } 
// else {
//   console.log("El número es cero.");
// }

// EN RESUMEN

// Utiliza if para especificar un bloque de código que se ejecutará si una condición determinada es verdadera.
// Utiliza else para especificar un bloque de código que se ejecutará si la misma condición es falsa.
// Utiliza else if para especificar una nueva condición a probar, si la primera condición es falsa.
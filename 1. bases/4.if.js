// Utiliza if para especificar un bloque de código que se ejecutará si una condición determinada es verdadera.
// Utiliza else para especificar un bloque de código que se ejecutará si la misma condición es falsa.
// Utiliza else if para especificar una nueva condición a probar, si la primera condición es falsa.

// // 1. Sintaxis IF
// if (condicion) {
//     // bloque de código que se ejecuta si la condición es verdadera
//   }
  


// // Ejemplo IF
// let numero1 = 0;

// if (numero1 <= 0) {
//   console.log("El número no es positivo.");
// }

// // ----------------------------------------------------------
// // 2. Sintaxis ELSE
// // La declaración else se usa junto con if para ejecutar un bloque de código cuando la condición del if es false (NO ES OBLIGATORIA).

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
// // 3. Sintaxis ELSE IF
// // La declaración else if permite probar múltiples condiciones en secuencia. Si la condición de if es false, se puede usar un else if para probar otra condición.

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




if (condicion) {
    // Acción a realizar 
}

else if (segundaCondición){
    //Acción a realizar
}

else{
    // Si el resultado de las condiciones anteriores resultan falsas
}
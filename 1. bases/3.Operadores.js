// // OPERADORES: Son símbolos especiales o palabras clave que se utilizan para realizar operaciones sobre uno o varios operandos. Los operadores permiten manipular valores y variables para realizar tareas como asignaciones, comparaciones, cálculos aritméticos, lógica operacional, y más.

// // 1.1. OPERADOR DE ASIGNACIÓN: El operador de asignación "=" asigna el valor de la derecha al operando de la izquierda.

// EJEMPLO
// let x = 5; // asigna 5 a x

// Hay también operadores de asignación compuesta que realizan una operación y asignan el resultado, como +=, -=, *=, /=, etc.

// x += 5; // es equivalente a x = x + 5;
// x -= 5; // x = x - 5;
// x *= 5; //x = x * 5;


// // ---------------------------
// 1.2. OPERADORES ARITMÉTICOS: Estos operadores se utilizan para realizar operaciones matemáticas comunes:

// Suma: +
// Resta: -
// Multiplicación: *
// División: /
// Módulo (resto de la división):
// Incremento (suma uno al operando): ++
// Decremento (resta uno al operando): --
// Exponenciación (potencia): **      

// // EJEMPLO:
// let cuentaRegresiva = 10;
// console.log(cuentaRegresiva); // 10
// cuentaRegresiva--;
// console.log(cuentaRegresiva); // 9


// // -----------------------------------
// 1.3. OPERADORES DE COMPARACIÓN: Los operadores de comparación comparan dos operandos y devuelven un valor booleano, true o false.

// Igual (==)
// No igual (!=)
// Estrictamente igual (===)
// Estrictamente no igual (!==)
// Mayor que (>)
// Menor que (<)
// Mayor o igual que (>=)
// Menor o igual que (<=) 

// // EJEMPLO:
// let a = 5;
// let b = '5';
// console.log(a === b); // // false porque el tipo es diferente


// // --------------------------
// 1.4. OPERADORES LÓGICOS: Se utilizan para determinar la lógica entre variables o valores:

// AND lógico (&&)
// OR lógico (||)
// NOT lógico (!)

// // EJEMPLO:
// let verdad = true;
// let falsedad = false;
// console.log(verdad && falsedad); // false porque uno de los operandos es false


// // -------------------------------------
// // 1.5. OPERADORES DE STRING:
// - Concatenación: +, combina cadenas de texto

// EJEMPLO
// "hola "+" mi nombres es :"

// // - Concatenación con asignación: +=
// EJEMPLO:
// let frase = "Estoy aprendiendo ";
// frase += "JavaScript.";
// console.log(frase); // "Estoy aprendiendo JavaScript."

// -EXTRA: contatenar con backsticks: puedes concatenar cadenas de texto utilizando plantillas literales (template literals), que se denotan con backticks (`). Las plantillas literales permiten incrustar expresiones y variables directamente dentro de una cadena sin tener que utilizar el operador +.

// // EJEMPLO:
// let nombre = "Jane";
// let mensaje = `Hola, ${nombre}!`; //Utilizamos la sintaxis ${variable}, para incrustar una variable en JS
// console.log(mensaje); // "Hola, Jane!"

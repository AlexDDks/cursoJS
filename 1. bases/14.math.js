// En JavaScript, el objeto Math proporciona una amplia gama de métodos estáticos para realizar operaciones matemáticas. Estos métodos son útiles para cálculos como trigonometría, logaritmos, redondeos, entre otros. A continuación, detallaremos algunos de los métodos matemáticos más utilizados en JavaScript, explicando su sintaxis y propósito.

// // 1. MÉTODOS DEL OBJETO MATH EN JS

// 1.1. Math.abs()

// Sintaxis: Math.abs(numero)

// Significado: Devuelve el valor absoluto de un número.
// Elimina cualquier signo negativo, dejando solo el valor positivo del número.

// Ejemplo de Uso:
// console.log(Math.abs(-5)); // Salida: 5



// 1.2. Math.ceil()

// Sintaxis: Math.ceil(numero)

// Significado: Redondea un número hacia arriba al entero más cercano. Útil para cálculos donde se necesita asegurar que un valor no sea menor que un cierto umbral.

// Ejemplo de Uso:
// console.log(Math.ceil(2.3)); // Salida: 3



// 1.3. Math.floor()

// Sintaxis: Math.floor(numero)

// Significado: Redondea un número hacia abajo al entero más cercano. Utilizado para obtener el valor entero inferior más cercano a un número dado.

// Ejemplo de Uso:
// console.log(Math.floor(2.7)); // Salida: 2



// 1.4. Math.round()

// Sintaxis: Math.round(numero)

// Significado: Redondea un número al entero más cercano.
// Si el número está a mitad de camino entre dos enteros, se redondea hacia el entero más cercano.

// Ejemplo de Uso:
// console.log(Math.round(2.5)); // Salida: 3



// 1.5. Math.pow()

// Sintaxis: Math.pow(base, exponente)

// Significado: Devuelve la base elevada al exponente.
// Útil para cálculos de potenciación.

// Ejemplo de Uso:
// console.log(Math.pow(3, 2)); // Salida: 9



// 1.6. Math.sqrt()

// Sintaxis: Math.sqrt(numero)

// Significado: Calcula la raíz cuadrada de un número. Esencial para operaciones que requieren la raíz cuadrada en cálculos matemáticos o de ingeniería.

// Ejemplo de Uso:
// console.log(Math.sqrt(9)); // Salida: 3



// 1.7. Math.random()

// Sintaxis: Math.random()

// Significado: Genera un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).
// Ampliamente utilizado en juegos, simulaciones o para cualquier caso donde se requiera aleatoriedad.

// Ejemplo de Uso:
// console.log(Math.random()); // Salida: un número entre 0 y 1



// 1.8. Math.max()

// Sintaxis: Math.max(valor1, valor2, ...)

// Significado: Devuelve el mayor de los argumentos proporcionados. Utilizado para comparaciones donde se necesita saber el valor más alto.

// Ejemplo de Uso:
// console.log(Math.max(5, 10, 15)); // Salida: 15




// 1.9. Math.min()

// Sintaxis: Math.min(valor1, valor2, ...)

// Significado: Devuelve el menor de los argumentos proporcionados. Utilizado para comparaciones donde se necesita saber el valor más bajo.

// Ejemplo de Uso:
// console.log(Math.min(5, 10, 15)); // Salida: 5
// 1. Los números en JavaScript tienen tanto métodos como propiedades asociadas. Al igual que con los strings, la diferencia entre un método y una propiedad es significativa. Los métodos son acciones que los números pueden realizar o funciones que operan sobre ellos, mientras que las propiedades son características inherentes o valores asociados a los números.


// 1.1 PROPIEDADES ESTÁTICAS_ Estas son propiedades del objeto constructor Number, no de instancias de números.

// 1.1.1 Number.MAX_VALUE

// Sintaxis: Number.MAX_VALUE

// Significado: Representa el número más grande que puede ser representado en JavaScript. Es una constante estática, lo que significa que es un valor fijo del objeto Number y no de instancias individuales de números.

// Ejemplo de Uso:
// console.log(Number.MAX_VALUE); // Salida: 1.7976931348623157e+308




// 1.1.2 Number.MIN_VALUE

// Sintaxis: Number.MIN_VALUE

// Significado: Es el número positivo más pequeño que JavaScript puede manejar, que es más cercano a cero sin ser cero. Al igual que MAX_VALUE, es una constante estática del objeto Number.

// Ejemplo de Uso:
// console.log(Number.MIN_VALUE); // Salida: 5e-324




// 1.1.3. Number.NaN

// Sintaxis: Number.NaN

// Significado:Es una propiedad que representa "Not-a-Number" (No es un Número). Útil para verificar si un resultado de una operación matemática no es un número válido.

// Ejemplo de Uso:
// console.log(Number.NaN); // Salida: NaN




// 1.1.4. Number.POSITIVE_INFINITY

// Sintaxis: Number.POSITIVE_INFINITY

// Significado: Representa el infinito positivo en JavaScript. Es útil para comparaciones donde un número excede el rango máximo representable.

// Ejemplo de Uso:
// console.log(Number.POSITIVE_INFINITY); // Salida: Infinity



// 1.1.5. Number.NEGATIVE_INFINITY

// Sintaxis: Number.NEGATIVE_INFINITY

// Significado: Representa el infinito negativo. Se utiliza en casos donde un número está por debajo del rango mínimo representable.

// Ejemplo de Uso:
// console.log(Number.NEGATIVE_INFINITY); // Salida: -Infinity



// // ------------------------------------------
// // 1.2 MÉTODOS DE INSTANCIA DE NUMBERS EN JS

// 1.2.1 toFixed()

// Sintaxis: numero.toFixed([dígitos])

// Significado:Convierte un número a una cadena usando notación de punto fijo.[dígitos] es un parámetro opcional que especifica el número de dígitos después del punto decimal.

// Ejemplo de Uso:

// let num = 123.456;
// console.log(num.toFixed(2)); // Salida: "123.46"



// 1.2.2. toExponential()

// Sintaxis: numero.toExponential([dígitos])

// Significado: Devuelve una representación del número en notación exponencial.[dígitos] es un parámetro opcional que indica el número de dígitos después del punto decimal en la notación exponencial.

// Ejemplo de Uso:
// let num = 123.456;
// console.log(num.toExponential(2)); // Salida: "1.23e+2"




// 1.2.3. toPrecision()

// Sintaxis: numero.toPrecision([precisión])

// Significado: Formatea un número a una longitud específica.[precisión] es un parámetro opcional que especifica el número total de dígitos significativos.

// Ejemplo de Uso:

// let num = 123.456;
// console.log(num.toPrecision(4)); // Salida: "123.5"



// 1.2.4. toString()
// Sintaxis: numero.toString([base])
// Significado: Convierte el número a una cadena.[base] es un parámetro opcional que especifica la base del sistema numérico para la conversión (por ejemplo, 2 para binario, 8 para octal, 16 para hexadecimal).

// Ejemplo de Uso:
// let num = 10;
// console.log(num.toString(16)); // Salida: "a" (representación hexadecimal)




// 1.2.5. valueOf()

// Sintaxis: numero.valueOf()

// Significado: Devuelve el valor primitivo de un objeto  Number. Este método es utilizado principalmente internamente por JavaScript y rara vez es necesario usarlo explícitamente en el código.

// Ejemplo de Uso:
// let num = new Number(123);
// console.log(num.valueOf()); // Salida: 123
// // 1. Los métodos de strings en JavaScript son funciones integradas que se pueden utilizar para realizar diversas operaciones en cadenas de texto (strings). Estos métodos son esenciales para la manipulación de texto en JavaScript y son muy utilizados en el desarrollo web.


// // 1.1 length:No es un método, sino una propiedad que devuelve la longitud de una cadena de texto.

// // Sintaxis: cadenaDeTexto.length

// // Ejemplo:
// // let texto = "Hola mundo";
// // console.log(texto.length); // Salida: 10



// 1.2. charAt: Devuelve el carácter en la posición especificada.

// Sintaxis: cadenaDeTexto.charAt(index)
// Ejemplo:

// let texto = "Hola";
// console.log(texto.charAt(1)); // Salida: o




// 1.3. indexOf(): Devuelve la posición de la primera aparición de un valor especificado en una cadena.
// Sintaxis: cadenaDeTexto.indexOf(valorBuscado, [posiciónInicial])
// Ejemplo:

// let texto = "Hola mundo";
// console.log(texto.indexOf("mundo")); // Salida: 5



// 1.4. lastIndexOf(): Similar a indexOf(), pero devuelve la última aparición del valor especificado.

// Sintaxis: cadenaDeTexto.lastIndexOf(valorBuscado, [posiciónInicial])

// Ejemplo:
// let texto = "Hola mundo, adiós mundo";
// console.log(texto.lastIndexOf("mundo")); // Salida: 18



// 1.5. slice()_ Extrae una parte de una cadena y devuelve una nueva cadena.

// Sintaxis: cadenaDeTexto.slice(inicio, [fin])

// Ejemplo:
// let texto = "Hola mundo";
// console.log(texto.slice(0, 4)); // Salida: Hola




// 1.6. substring(): Similar a slice(), pero no acepta índices negativos.

// Sintaxis: cadenaDeTexto.substring(inicio, [fin])

// Ejemplo:
// let texto = "Hola mundo";
// console.log(texto.substring(5)); // Salida: mundo




// 1.7. substr(): Similar a slice() y substring(), pero el segundo parámetro especifica la longitud del fragmento.

// Sintaxis: cadenaDeTexto.substr(inicio, longitud)

// Ejemplo:
// let texto = "Hola mundo";
// console.log(texto.substr(1, 3)); // Salida: ola




// 1.8 toUpperCase() y toLowerCase(): Convierten una cadena a mayúsculas o minúsculas, respectivamente.

// Sintaxis: cadenaDeTexto.toUpperCase() / cadenaDeTexto.toLowerCase()

// Ejemplo:
// let texto = "Hola Mundo";
// console.log(texto.toUpperCase()); // Salida: HOLA MUNDO
// console.log(texto.toLowerCase()); // Salida: hola mundo




// 1.9. trim(): Elimina los espacios en blanco desde ambos extremos de una cadena.

// Sintaxis: cadenaDeTexto.trim()

// Ejemplo:
// let texto = "   Hola mundo   ";
// console.log(texto.trim()); // Salida: Hola mundo



// 1.10. replace(): Reemplaza una subcadena por otra dentro de una cadena.

// Sintaxis: cadenaDeTexto.replace(subcadenaBuscada, subcadenaReemplazo)

// Ejemplo:

// let texto = "Hola mundo";
// console.log(texto.replace("mundo", "a todos")); // Salida: Hola a todos



// DIFERENCIAS DE PROPIEDADES Y MÉTODOS:

// PROPIEDAD:

// - Definición: Una propiedad es un valor asociado a un objeto. Es una característica del objeto, como un atributo o un dato que el objeto almacena. En JavaScript, las propiedades pueden ser valores primitivos, otros objetos o funciones.
// Ejemplo en JavaScript: length en una cadena de texto (string) es una propiedad. Representa la longitud de la cadena y es un valor numérico.

// - Características:
// Las propiedades son valores que se almacenan en el objeto.
// No se invocan con paréntesis.
// Pueden ser leídas (y en algunos casos, modificadas) directamente.


// MÉTODO

// - Definición: Un método es una función asociada a un objeto. Es una acción que el objeto puede realizar. Los métodos a menudo actúan sobre las propiedades del objeto, manipulándolas o utilizándolas para realizar cálculos o acciones.

// - Ejemplo en JavaScript: toUpperCase() en una cadena de texto es un método. Transforma y devuelve la cadena en mayúsculas.

// - Características:
// Los métodos son funciones y, por lo tanto, se ejecutan o invocan.
// Se utilizan paréntesis para invocarlos, incluso si no requieren argumentos.
// Pueden realizar operaciones y devolver un resultado.
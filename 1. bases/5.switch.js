// DECLARACIÓN SWITCH: La declaración switch es una estructura de control utilizada para realizar diferentes acciones basadas en distintos casos. Es similar a una serie de if's pero es más limpio y legible cuando se trata de comparar la misma variable o expresión con diferentes valores. Evalúa una expresión y ejecuta el bloque de código correspondiente al case que coincide con el valor de la expresión.

// VENTAJAS:
// Proporciona una manera más legible de comparar una variable con distintos valores.
// Puede ser más claro y conciso que múltiples if-else if cuando se compara la misma variable con muchos posibles valores.

// DESVENTAJAS: Solo funciona con igualdades estrictas (===).
// Puede ser menos flexible que if-else if, ya que no admite condiciones lógicas complejas.
// Si se olvida el break en un case, puede llevar a la ejecución de casos subsiguientes ("fall through").

// USOS: 
// Cuando se tienen múltiples condiciones que dependen del mismo valor de una variable.
// En menús de selección o en el manejo de comandos específicos.

// // SINTAXIS SWITCH
// // switch (expresion) {
// //     case valor1:
// //       Bloque de código que se ejecuta si expresion === valor1
// //       break;
// //     case valor2:
// //       Bloque de código que se ejecuta si expresion === valor2
// //       break;
// //     Puedes tener cualquier número de casos.
// //     default:
// //       Bloque de código que se ejecuta si ninguno de los casos anteriores coincide
// //   }

// EXPRESION: es la variable o el valor que se evaluará.
// CASE: se compara con la expresion utilizando una comparación estricta (===).
// BREAK: este comando termina el switch y pasa el control a la declaración siguiente a switch. Si se omite, el script continuará ejecutando las siguientes condiciones case o default independientemente de si la comparación es verdadera o no (esto se llama "fall-through").
// DEFAULT: este caso se ejecuta si ninguno de los case coincide con la expresion. Es similar a un else en una estructura if-else.
  
// //   EJEMPLO DEL SWITCH
// // let fruta = 'fresa';
// // if expresion === case;
// // switch (fruta) {
// //   case 'banana':
// //     console.log('¡Me encantan las bananas!');
// //     break;
// //   case 'manzana':
// //     console.log('Las manzanas son deliciosas.');
// //     break;
// //   case 'mango':
// //     console.log('Los mangos son los mejores.');
// //     break;
// //   default:
// //     console.log('Lo siento, no tenemos ' +     fruta    + ', vuelva pronto');
// // }
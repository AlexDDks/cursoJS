// La declaración switch es una estructura de control utilizada para realizar diferentes acciones basadas en distintos casos. Es similar a una serie de if statements pero es más limpio y legible cuando se trata de comparar la misma variable o expresión con diferentes valores.

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

// expresion: es la variable o el valor que se evaluará.
// case: se compara con la expresion utilizando una comparación estricta (===).
// break: este comando termina el switch y pasa el control a la declaración siguiente a switch. Si se omite, el script continuará ejecutando las siguientes condiciones case o default independientemente de si la comparación es verdadera o no (esto se llama "fall-through").
// default: este caso se ejecuta si ninguno de los case coincide con la expresion. Es similar a un else en una estructura if-else.
  
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

// El switch es una herramienta poderosa y debe utilizarse cuando tienes múltiples casos para evaluar sobre una única expresión o variable. Es especialmente útil para evitar una cadena larga de if...else if...else if...else

switch (expresion){
    case expresion:
    //Bloque de código que se ejecuta si expresion === valor1
    break;
    case valor2:
    // Bloque de código que se ejecuta si expresion === valor2
    default:
    //Bloque de código que se ejecuta si ninguno de los casos anteriores coincide
    break;
}
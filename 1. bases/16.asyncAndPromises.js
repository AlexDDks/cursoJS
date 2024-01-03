// 1. Introducción a la Asincronía en JS.

// JS es un lenguaje de un sólo hilo, osea sólo puede ejecutar una sola tarea a la vez. Sin embargo, muchas operaciones como las solicitudes de red, pueden tardar tiempo en completarse. Ejecutar estas operaciones de manera síncrona bloquearía el hilo principal, congelando la aplicación durante este lapso. Aquí es donde entra la asincronía, permitiendo que estas operaciones se realicen en el fondo y notificar a nuestro código una vez que se completan.

// La asincronía en JS se hace mediante callbacks, promesas o async/await. La asincronía es posible en JS gracias al event loop, que es una característica del entorno de ejecución que permite que las operaciones no bloqueantes se ejecuten sin interrumpir el flujo principal de ejecución.

// -------------------------------------
// 1.1 Sincronía

// En un entorno sincrónico, las tareas se ejecutan una después de la otra. Cada tarea debe esperar a que la anterior se complete antes de poder comenzar. En JS, si ejecutas varias operaciones sincrónicas que toman tiempo, cada una bloqueará el hilo hasta que se complete, lo que puede resultar en una UX no óptima, especialmente en la web


// 1.2 Event loop

// Este es un proceso que verifica constantemente si hay tareas que necesitan ser ejecutadas. Si hay una operación asíncrona pendiente que ha terminado su trabajo en el fondo y está lista para ser ejecutada, el Event loop la coloca en la cola de tareas. Siempre que la pila de llamada (call stack) está vacía, el Event Loop toma la primera tarea de la cola y la ejecuta. Este modelo permite a JS manejar muchas operaciones simultáneas, a pesar de ser de un solo hilo


// 1.3 Hilo

// Un hilo es una secuencia de instrucciones ejecutables que puede ser gestionada de manera independiente por un planificador, que forma parte del sistema operativo. Los hilos son la unidad básica de utilización de CPU y consisten en un ID de hilo, un contador de programa, un conjunto de registros y una pila

// 1.3.1 Hilos en sistemas de múltiples hilos

// En sistemas operativos que soportan la multitarea, múltiples hilos pueden ejecutarse en paralelo (en sistemas con múltiples núcleos). La programación multihilo permite a una aplicación realizar varias tareas al mismo tiempo, como procesar entradas del usuario mientras realiza otras operaciones en el fondo.

// 1.3.2. JS y el hilo único

// JS se ejecuta en un sólo hilo, lo que tiene implicaciones importantes:

// - Simplicidad: La ejecución de un solo hilo evita la complejidad inherente a los entornos multihilo, como las condiciones de carrera, los bloqueos mutuos (deadlocks), y otros problemas de sincronización.

// - Event Loop: Para manejar operaciones asíncronas sin bloquear el hilo principal, JavaScript utiliza el Event Loop. El Event Loop permite que las operaciones de larga duración como las I/O se ejecuten "en el fondo" y se reintegren en el hilo principal una vez completadas.


// -------------------------------------
// 2. Promesas

// Una promesa es un objeto que representa la eventual finalización o falla de una operación asíncrona. Escencialmente, es un contenedor para un valor que aún no se conoce cuando se crea la promesa, la cual puede tener tres estados:

// - Pendiente: Estado inicial, no cumplido ni rechazado
// - Cumplido: Significa que la operación se completó con éxito
// - Rechazado: Significa que la operación falló

Sintaxis:

let promesa = new Promise(function(resolve, reject){

})

// - resolve: es una función que se llama con el valor resultante cuando la promesa se cumple
// - reject: es una función que se llama con un error o razón cuando la promesa se rechaza.

// 2.1 Función then:

// Esta función es un método de las Promesas en JS que se utiliza para especificar qué hacer cuando la promesa se cumple ("resolve") o es rechazada ("reject"). El método "then" toma dos argumentos opcionales que son funciones callback.

// - Función de cumplimiento: se llama si la promesa se cumple exitosamente. Recibe el valor pasado a "resolve".
// - Función de rechazo: se llama si la promesa es rechazada. Recibe el motivo o error pasado a "reject".


// Ejemplo:

let miPromesa = new Promise((resolve, reject) => {
    let expresion = true;
    if (expresion) {
        resolve ("La operación fue exitosa");
    }
    else{
        reject("Hubo un error");
    }
});

// si expresion es true, la promesa se cumple y se llama a resolve('La operación fue exitosa'). Esto hace que la función de cumplimiento que pasaste al método then se ejecute con el argumento 'La operación fue exitosa'. Por eso ves el console.log(valor).

// Cuando invocas resolve('La operación fue exitosa'), estás asignando indirectamente el valor 'La operación fue exitosa' al parámetro valor en la función de cumplimiento que pasas a then. No es que estés escribiendo valor = "La operación fue exitosa" en ninguna parte del código; es que al llamar a resolve, el valor que pasas se pasa automáticamente como argumento a la función de cumplimiento.

miPromesa.then(
    valor => console.log(valor), // Se ejecuta cuando se invoca resolve.
    error => console.log(error) // Se ejecuta cuando se invoca reject.
);


// --------------------------------------
// 3. Callbacks y Async/Await

// Los callbacks y async/await son dos maneras distintas de manejar operaciones asíncronas en JavaScript. Ambos permiten que el código no se bloquee mientras espera que una tarea asíncrona se complete, pero lo hacen de maneras diferentes.

// 3.1 Callbacks

// Un callback es una función que se pasa a otra como argumento, que luego se invoca dentro de la función externa para completar alguna acción. En operaciones asíncronas, los CB se utilizan apra indicar qué debe suceder después de que se complete una tarea asíncrona.

// Ejemplo:

function esperarYCorrer(ms, callback) {
    setTimeout(() => {
      console.log('Espera completada');
      callback();
    }, ms);
  }
  
  esperarYCorrer(2000, () => {
    console.log('Callback ejecutado');
  });
  
// En este código, esperarYCorrer toma una cantidad de milisegundos y un callback. Después de esperar, ejecuta el callback.

// Sin embargo, el uso excesivo de callbacks puede llevar a una situación conocida como "callback hell" o "Pyramid of Doom", donde tienes muchos niveles de funciones anidadas, lo que hace que el código sea difícil de leer y mantener.


// -------------------------------
// 3.2 Async/Await

// Esta es una adición reciente a JS que permite trabajar con promesas de una manera más limpia y legible. Una función async devuelve una promesa, y la palabra clave "await" se utiliza para esperar a que se resuelva una promesa dentro de una función async.

// Ejemplo:
async function tareaAsincrona() {
  const resultado = await algunaFuncionQueDevuelveUnaPromesa();
  console.log(resultado);
  return 'completado';
}

tareaAsincrona().then(resultadoFinal => {
  console.log(resultadoFinal); // 'completado'
});

// tareaAsincrona es una función async. Dentro de ella, await pausa la ejecución de la función hasta que la promesa de algunaFuncionQueDevuelveUnaPromesa se resuelve. Una vez que se resuelve, resultado obtiene su valor y la ejecución continúa. La función async en sí misma devuelve una promesa, lo que significa que puedes usar then con ella.

// // -----VARIABLES-----
// // PARA DECLARAR VARIABLES:
// // 1. AUTOMÁTICAMENTE, SIN DECLARAR (Se recomienda como buena práctica siempre declararlas):
// // SINTAXIS
// x = 5;
// y = 6;
// z = x + y;


// ----------------------------------------------------------
// // 2. USANDO LET
// // SINTAXIS
// let x =5;
// let y = 6;
// let z = x + y;

/* - Las variables definidas con let tienen alcance de bloque.
   - Las variables definidas con let no pueden ser redeclaradas (en su bloque).
   - Las variables definidas con let deben ser declaradas antes de su uso (osea no podemos acceder a ella antes de que sea declarada).
   - Cuando una variable se declara con let, su declaración no se mueve al inicio de su ámbito.
   - Las variables definidas con let sí pueden reasignarse */

// // Scope de let (tienen scope de bloque)*/
// {
//     let x = 2;
//     console.log(x);
// }
// // x no puede usarse aquí

// let x = 10;
//// Acá x es 10

// // -----------------------------------------------------------
// // 3. USANDO VAR
// // SINTAXIS
// var x = 5;
// var y = 6;
// var z = x + y;

/* - Las variables declaradas con var tienen alcance de función (son accesibles desde cualquier parte de la función en la que fueron declaradas). Si se declaran fuera de cualquier función, tienen alcance global.
   - Las variables declaradas con var pueden ser redeclaradas en el mismo ámbito sin errores.
   - Debido al hoisting, las variables declaradas con var pueden ser accedidas antes de su declaración, aunque su valor será undefined.
   - Las declaraciones de variables con var son movidas al inicio de su ámbito durante la fase de compilación, conocido como hoisting.
   - Las variables definidas con var pueden ser reasignadas */

// // //Scope de var (no tienen scope de bloque, sino global)
// {
//     var x = 2;
// }
//   // x puede usarse aquí



// // --------------------------------------------------------
// 4. USANDO CONST:
// // SINTAXIS
// const x = 5;
// const y = 6;
// const z = x + y;

/* - Al igual que let, const tiene alcance de bloque.
   - Las variables declaradas con const no pueden ser redeclaradas dentro del mismo bloque.
   - Al igual que let, las variables declaradas con const están sujetas a la "temporal dead zone" y deben ser declaradas antes de su uso.
   - Las declaraciones con const tampoco experimentan hoisting de la misma manera que var, por lo que no se pueden usar antes de su declaración real en el código.
   - No se puede reasignar. Sin embargo, si la variable es un objeto o un arreglo, sus propiedades o elementos internos sí pueden ser modificados. */


// Scope de const (tienen scope de bloque)
// {
//     const x = 2;
// }
// // x no puede usarse aquí

// const x = 10;
// // Acá x es 10
console.log("Holi");
    
//creara variables
let universidad = "utiki"; //string
//funcion typeof muestra el tipo de dato
console.log(typeof(universidad));
let edad = 45; //
console.log(typeof(edad));
debugger;
let pi = 3.14;
console.log(typeof(pi));
let soyMillonario = false;
console.log(typeof(soyMillonario));

//arreglo o vector o matriz
let arreglo = [
    universidad, edad
    , pi, soyMillonario
];
const noBasta = "Si basta, el vasto, con el pasto";
//noBasta = "666669";
console.log(arreglo);

//length, muestra la cantidad o elementos de un arreglo
console.log(arreglo.length);

//recorridos
for(let i=0; i<arreglo.length; i++) {
    debugger; //para la ejecucion de esta linea
    console.log(arreglo[i]);
}
function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  console.log(cb(arrayOfNumbers))
}
function sumArray(array){
  suma=0
  array.forEach(dato=>suma+=dato)
  return suma
}
sumarArray([1,2,3,4,5],sumArray)
module.exports = sumarArray;

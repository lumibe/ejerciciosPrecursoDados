function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  array.forEach(dato=>console.log(cb(dato)))
}
function duplicar(dato){
  return 2*dato
}
forEach([1,2,3,4,5],duplicar)
module.exports = forEach;

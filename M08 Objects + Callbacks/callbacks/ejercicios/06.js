function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  nuevon=array.map(dato=>cb(dato))
  return nuevon
}
function duplicar(dato){
  return 2*dato
}
console.log(map([1,2,3,4,5],duplicar))
module.exports = map;

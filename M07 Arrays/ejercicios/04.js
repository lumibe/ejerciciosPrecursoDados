function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var pos=Math.trunc((Math.random()*(array.length)))
  return array[pos];
}
console.log(obtenerElementoAleatorio([2,4,3,0]))
module.exports = obtenerElementoAleatorio;

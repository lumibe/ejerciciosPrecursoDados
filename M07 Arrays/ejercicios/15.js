function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  ok=(num)=>num===array[0]
  return array.every(ok)
}
console.log(todosIguales([3,3,4,3,3]))
module.exports = todosIguales;

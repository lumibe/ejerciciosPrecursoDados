function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  modificado=[]  
  for (i=0;i<array.length;i++)
  {
    modificado.push(array[i]*i)
  }
  return modificado
}
console.log(multiplicarElementosPorIndice([1,2,3,4,5]))
module.exports = multiplicarElementosPorIndice;

function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  num=numeros[0]
  for(i=0;i<numeros.length;i++)
  {
    if (numeros[i]!==num)
      break;
    num=num+1
  }
  return num
}
console.log(encontrarNumeroFaltante([1,2,3,5,6]))
module.exports = encontrarNumeroFaltante;
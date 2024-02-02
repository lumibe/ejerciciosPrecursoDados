function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  suma=0
  /*
  for(i=0;i<arrayOfNums.length;i++)
  {
    suma+=arrayOfNums[i]
  }*/
  arrayOfNums.forEach(element => {
    suma+=element
  });
  return suma
}
console.log(agregarNumeros([1,2,3,4,5]))
module.exports = agregarNumeros;

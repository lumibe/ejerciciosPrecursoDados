function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  cuenta=0;
  for(i=0;i<array.length;i++)
  {
      if(array[i]>10)
        cuenta++;
  }
  return cuenta;
}
console.log(contarElementosMayoresA10([2,11,4,23,17,9]));
module.exports = contarElementosMayoresA10;

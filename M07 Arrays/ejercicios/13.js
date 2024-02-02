function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  suma=0
  for(i=0;i<resultadosTest.length;i++)
  {
    suma+=resultadosTest[i]
  }
  promedio=suma/resultadosTest.length
  return promedio
}
console.log(promedioResultadosTest([1,2,3,4,5]))
module.exports = promedioResultadosTest;

function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  var pos=0;
  for (var i=0;i<array.length-1;i++)
  {
    menor=array[i];
    for(j=i;j<array.length;j++)
    {
      if (array[j]<menor)
      {
        menor=array[j];
        pos=j;
      }
    }
    if (menor!==array[i])
    {
      tempo=array[i];      
      array[i]=menor;
      array[pos]=tempo;
    }
  }
  return array;
}
console.log(ordenarArray([3,1,4,2,5,0]))
module.exports = ordenarArray;

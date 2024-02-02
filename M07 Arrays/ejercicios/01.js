function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  invertido=[];
  for (var i=array.length-1;i>=0;i--)
  {
    invertido.push(array[i]);
  }
  return invertido;
}
console.log(invertirArray([1,2,3,4,5]))
module.exports = invertirArray;

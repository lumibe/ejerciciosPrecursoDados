function filter(arrayOfStrings) {
  // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  filtrados=[]
  for (i=0;i<arrayOfStrings.length;i++)
  {
    if(arrayOfStrings[i][0]==='a')
      filtrados.push(arrayOfStrings[i])
  }
    return filtrados
}
console.log(filter(["orange","apple","banana","annie"]))
module.exports = filter;

function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  hallado=false;
  num=0
  for(i=0;i<numeros.length;i++)
  {
    num=numeros[i]
    for(j=i+1;j<numeros.length;j++)
    {
      if (numeros[j]!==num)
      {
        hallado=true
        break; 
      }     
    }
    if (hallado)
      break;
  }
  return num
}
console.log(encontrarElementoRepetido([2,1,3,2,1,5,1]))
module.exports = encontrarElementoRepetido;
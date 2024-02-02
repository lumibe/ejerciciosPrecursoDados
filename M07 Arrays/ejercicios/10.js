function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  pos=0;
  mayor=0;
  for(i=0;i<array.length;i++)
  {
      if(array[i]>mayor)
      {
        mayor=array[i];
        pos=i;
      }
  }
  return pos;
}
console.log(encontrarIndiceMayor([3,5,1,7,0,4]))
module.exports = encontrarIndiceMayor;

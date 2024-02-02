function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  filtro=[]
  for(i=0;i<array.length;i++)
    if(array[i]==='Enero' ||array[i]==='Marzo' ||array[i]==='Noviembre')
      filtro.push(array[i])
  if (filtro.length<3)
  {
    msg="No se encontraron todos los meses pedidos...."
    return msg
  }
  else
    return filtro
}
console.log(mesesDelAño(['Septiembre','Junio','Julio','Enero','Noviembre']))
module.exports = mesesDelAño;

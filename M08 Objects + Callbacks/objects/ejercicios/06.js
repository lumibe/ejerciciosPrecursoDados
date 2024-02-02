const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  conta=0
  for (propiedad in objeto)
    conta++
  return conta
};
obj={code:"1111",nombe:"Luis",nota:"2.8"}
console.log(contarPropiedades(obj)) 
module.exports = contarPropiedades;

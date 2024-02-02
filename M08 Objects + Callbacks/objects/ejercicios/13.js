function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad]
  return objeto
}
obj={code:"1111",nombe:"Luis",nota:"2.8",sexo:'SI'}
console.log(eliminarPropiedad(obj,'sexo'))
module.exports = eliminarPropiedad;

function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  objeto[propiedad]=null
  return objeto
}
obj={code:"1111",nombe:"Luis",nota:"2.8"}
console.log(agregarPropiedad(obj,"sexo"))
module.exports = agregarPropiedad;

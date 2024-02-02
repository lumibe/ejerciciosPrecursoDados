function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  objeto[propiedad]=4.1
  return objeto
}
obj={code:"1111",nombe:"Luis",nota:"2.8"}
console.log(actualizarValorPropiedad(obj,"nota",2.8))
module.exports = actualizarValorPropiedad;

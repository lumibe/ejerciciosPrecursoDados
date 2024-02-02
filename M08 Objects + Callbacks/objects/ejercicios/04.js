function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  return objeto.hasOwnProperty(propiedad)
}
obj={code:"1111",nombe:"Luis",nota:"2.8"}
console.log(verificarPropiedad(obj,"age"))
module.exports = verificarPropiedad;

const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  return objeto[propiedad]
};
obj={code:"1111",nombe:"Luis",nota:"2.8"}
console.log(obtenerValorPropiedad(obj,"nota"))
module.exports = obtenerValorPropiedad;

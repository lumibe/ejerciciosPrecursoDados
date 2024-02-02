const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  
  objeto[propiedad]=valor
  return objeto
}
obj={code:"1111",nombe:"Luis",nota:"2.8"}
console.log(agregarNuevaPropiedad(obj,"genero",'M'))
module.exports = agregarNuevaPropiedad;

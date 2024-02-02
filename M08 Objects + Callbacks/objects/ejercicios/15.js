function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  ok=false
  if (objeto.hasOwnProperty(propiedad))
    ok=true
  return ok
}
obj={code:1111,email:'lucho1234@yahoo.com'}
console.log(tienePropiedad(obj,"chichi"))
module.exports = tienePropiedad;

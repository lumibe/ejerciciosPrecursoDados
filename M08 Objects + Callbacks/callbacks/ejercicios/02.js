function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  console.log(callback(string))
}
function callback(cadena){
  return cadena.toUpperCase()
}
cambiarCadena("perro",callback)
module.exports = cambiarCadena;

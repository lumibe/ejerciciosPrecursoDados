function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  objetoMisterioso.numeroMisterioso=objetoMisterioso.numeroMisterioso*5
  return objetoMisterioso.numeroMisterioso
}
obj={numeroMisterioso:20}
console.log(multiplicarNumeroDesconocidoPorCinco(obj))
module.exports = multiplicarNumeroDesconocidoPorCinco;

function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  var invalido=false;
  if (valor===null || valor===undefined)
    invalido=true;
  return invalido;
}
console.log(esNuloOIndefinido(null));
module.exports = esNuloOIndefinido;
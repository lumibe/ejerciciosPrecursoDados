const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  dato=10
  if (callback(array,dato))
    return dato
  else
    return "No se enecuentra"
};
function busca(arreglo,dato)
{
    ok=false
    if (arreglo.includes(dato))
      ok=true
    return ok
}
console.log(buscarElemento([2,7,10,45,0,8],busca))
module.exports = buscarElemento;

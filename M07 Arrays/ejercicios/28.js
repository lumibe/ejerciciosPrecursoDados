function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  ok=false
  if(Array.isArray(arr) && arr.length>0)
    ok=true
  return ok
}
console.log(esArrayNoVacio([3,,4,5]))
module.exports = esArrayNoVacio;
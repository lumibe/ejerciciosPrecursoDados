function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  ok=false
  if(str1.length===str2.length)
    ok=true
  return ok
}
console.log(tienenMismaLongitud("abc","defg"))
module.exports = tienenMismaLongitud;
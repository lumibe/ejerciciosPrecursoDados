function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  ok=false
  if(x===y)
    ok=true
  return ok
}
console.log(sonIguales(56,55))
module.exports = sonIguales;
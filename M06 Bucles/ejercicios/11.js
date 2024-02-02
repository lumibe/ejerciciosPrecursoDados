function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  ok=false
  if(num>20 && num<50)
    ok=true
  return ok
}
console.log(estaEnRango(30))
module.exports = estaEnRango;

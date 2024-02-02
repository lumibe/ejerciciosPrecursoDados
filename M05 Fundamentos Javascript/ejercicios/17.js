function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
    ok=false
    if(num%2==0)
      ok=true
    return ok
}
console.log(esPar(34))
module.exports = esPar;

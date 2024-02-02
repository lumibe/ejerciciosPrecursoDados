function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:
    ok=false
    if(num>50)
      ok=true
    return ok
}
console.log(mayorQueCincuenta(45))
module.exports = mayorQueCincuenta;

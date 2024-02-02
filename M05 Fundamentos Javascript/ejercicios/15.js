function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
    ok=false
    if(num<90)
      ok=true
    return ok
}
console.log(menosQueNoventa(45))
module.exports = menosQueNoventa;
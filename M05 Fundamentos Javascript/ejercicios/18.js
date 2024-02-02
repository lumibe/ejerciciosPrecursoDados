function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
   ok=false
    if(num%2==1)
      ok=true
    return ok
}
console.log(esImpar(35))
module.exports = esImpar;
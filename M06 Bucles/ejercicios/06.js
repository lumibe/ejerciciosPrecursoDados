function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  ok=false;
  if (num>99 && num<1000)
    ok=true;
  return ok;
}
console.log(tieneTresDigitos(564));
module.exports = tieneTresDigitos;

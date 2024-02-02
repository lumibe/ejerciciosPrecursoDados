function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  ok=false;
  if(num===10 || num===5)
     ok=true;
  return ok;
}
console.log(esDiezOCinco(4))
module.exports = esDiezOCinco;

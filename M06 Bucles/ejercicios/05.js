function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  answer=false;
  if (valor==true)
    answer=true;
  return answer;
}
console.log(esVerdadero(false))
module.exports = esVerdadero;

function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  divisores=0
  respuesta=false
  for (i=1;i<=Math.trunc(numero/2);i++)
  {
    if (numero%i===0)
      divisores++;
  }
  if (divisores<=2)
    respuesta=true;
  return respuesta
}
console.log(esNumeroPrimo(7))
module.exports = esNumeroPrimo;

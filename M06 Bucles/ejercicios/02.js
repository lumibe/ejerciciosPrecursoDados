function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  validacion=false;
  if (booleano1==true && booleano2==true)
    validacion=true;
  return validacion;
}
console.log(esVerdaderoYFalso(true, true));

module.exports = esVerdaderoYFalso;

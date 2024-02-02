function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  es=false;
  if (numero%2===0)
  {
    if (numero>=2)
    {
      i=1;
      pote=Math.pow(2,i);
      while(pote<numero)
      {
        i++;        
        pote=Math.pow(2,i);
      }
      if (pote===numero)
        es=true;
    }
  }
  else
    console.log("Un impar no puede ser potencia de 2...")
  return es;
}
console.log(esPotenciaDeDos(16));
module.exports = esPotenciaDeDos;

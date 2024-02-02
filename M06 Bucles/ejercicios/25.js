function esPalindromo(texto) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  invertido="";
  ok=false;
  for (i=texto.length;i>=0;i--)
  {    
    invertido=invertido+texto.charAt(i);
  }
  if (texto===invertido)
    ok=true;
  return ok;
}
console.log(esPalindromo("amor"))
module.exports = esPalindromo;

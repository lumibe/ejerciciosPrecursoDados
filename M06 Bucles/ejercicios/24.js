function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  invertido="";
  for (i=texto.length;i>=0;i--)
  {    
    invertido=invertido+texto.charAt(i);
  }
  return invertido;
}
console.log(invertirTexto("luis"));
module.exports = invertirTexto;
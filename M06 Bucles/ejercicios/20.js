function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  produc=0;
  for (i=1;i<=n;i++)
  {
    produc=produc+i; 
    if (produc>100)  
    {
       console.log(i);
       break;
    } 
  }
  return produc;
}
console.log(sumarHastaNConBreak(50));


module.exports = sumarHastaNConBreak;
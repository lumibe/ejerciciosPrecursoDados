function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  produc=0;
  for (i=1;i<=n;i++)
  {
    produc=produc+i;    
  }
  return produc;
}
console.log(sumarHastaN(5));
module.exports = sumarHastaN;

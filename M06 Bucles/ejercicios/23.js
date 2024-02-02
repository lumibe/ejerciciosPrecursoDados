function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  aumentado=num
  con=0
  do{
    aumentado=aumentado+5
    con+=1
  }
  while(con<9);
  return aumentado
}
console.log(doWhile(5))
module.exports = doWhile;
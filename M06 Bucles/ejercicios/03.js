function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  mayor=x;
  if(x>y)
    mayor=x;
  else if (y>x)
    mayor=y;
  return mayor;
}
console.log(obtenerMayor(5,5));
module.exports = obtenerMayor;

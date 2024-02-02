function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:
  if (y!==0)
    return x/y
  else
    return "No es posible la division entre CERO..."
}
console.log(divide(24,3))
module.exports = divide;
function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  if (y!==0)
    return x%y
  else
    return "No es posible la division entre CERO..."
}
console.log(obtenerResto(24,0))
module.exports = obtenerResto;
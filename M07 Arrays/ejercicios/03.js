function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  esta=-1;
  if (array.includes(elemento))
    esta=1;
  return esta;
}
console.log(encontrarElemento(8,[0,4,1]));
module.exports = encontrarElemento;

function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  mayusculas=array.map(dato=>{return dato.toUpperCase();})
  return mayusculas;
}
console.log(convertirStringAMayusculas(['perro','perra']));
module.exports = convertirStringAMayusculas;

function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  respuesta=""
  if (num===0)
    respuesta="false"
  else if (num>0)    
    respuesta="positivo"
  else
   respuesta="negativo"
  return respuesta
}
console.log(esPositivo(-2))
module.exports = esPositivo;
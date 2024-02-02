function multiplicarArgumentos(arguments) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  resul=-1
  if (arguments.length===0)
    resul= 0
  else{
    prod=1
    for(i=0;i<arguments.length;i++)
    {
      prod=prod*arguments[i]
    }
    resul= prod
  }
  return resul  
}
console.log(multiplicarArgumentos([1,2,3,4,5]))
module.exports = multiplicarArgumentos;

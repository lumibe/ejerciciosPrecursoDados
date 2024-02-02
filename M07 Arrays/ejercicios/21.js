function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  multiplo=0
  for(i=0;i<secuencia.length;i++)
  {
    if(secuencia[i]%n===0)
    {
      multiplo=secuencia[i] 
      break;       
    }
  }
    return multiplo
}
console.log(encontrarPrimerMultiploDeN(3,[2,5,6,8,0]))
module.exports = encontrarPrimerMultiploDeN;
function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   ok=false;
   if (a>0 && a<10)
      ok=true;
   return ok;

}
console.log(esPositivoOInferiorA10(9));
module.exports = esPositivoOInferiorA10;

function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  saludo=""
  switch(idioma)
  {
    case "aleman":
      saludo="Guten Tag"
      break;
    case "mandarin":
      saludo="NI Hao!"
      break;
    case "ingles":
      saludo="Hello!"
      break;
    default:
      saludo="Hola"   
  }
  return saludo;
}
console.log(saludo("aleman"))
module.exports = saludo;

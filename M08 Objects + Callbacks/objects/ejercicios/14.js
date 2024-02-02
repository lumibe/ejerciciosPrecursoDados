function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  ok=true
  if(objetoUsuario.email===null)
    ok=false
  return ok
}
obj={code:1111,email:'lucho1234@yahoo.com'}
console.log(tieneEmail(obj))
module.exports = tieneEmail;

function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  ok=false
  if (objetoUsuario.password===password)
    ok=true
  return ok
}
obj={nombre:"Luis",password:'1234'}
console.log(verificarPassword(obj,'1235'))
module.exports = verificarPassword;

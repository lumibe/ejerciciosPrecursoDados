function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código: ok=false
  objetoUsuario['password']=nuevaPassword
  return objetoUsuario
}
obj={nombre:"Luis",password:'1234'}
console.log(actualizarPassword(obj,'4321'))
module.exports = actualizarPassword;

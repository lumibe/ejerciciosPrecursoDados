function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  objeto={}
  objeto.nombre=nombre
  objeto.email=email
  objeto.password=password
  return objeto
}
console.log(nuevoUsuario("Luis","luis@yahoo.com",'lulu23'))
module.exports = nuevoUsuario;

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for (i=0;i<objetoMuchosUsuarios.length;i++)
  {
      objetoMuchosUsuarios[i].espremium=true
  }
  return objetoMuchosUsuarios
}
obj=[{nombre:'Angel',espremium:false},{nombre:'Bellota',espremium:false},{nombre:'Cuca',espremium:false}]
console.log(pasarUsuarioAPremium(obj))
module.exports = pasarUsuarioAPremium;

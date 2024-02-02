function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  posteados=objetoUsuario.posts
  suma=0
  for (i=0;i<posteados.length;i++)
  {
    suma=suma+posteados[i].likes
  }
  return suma
}
obj={nombre:'Angel',posts:[{likes:21},{likes:23},{likes:26}]}
console.log(obj.nombre+' tiene '+sumarLikesDeUsuario(obj)+' Likes')
module.exports = sumarLikesDeUsuario;

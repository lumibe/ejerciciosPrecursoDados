function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  objeto={
    'nombre':nombre,
    'edad':edad,
    meow:function(){return "meow!"}
  }
  return objeto  
}
obj=crearGato("pichurria",18)
console.log(obj)
console.log(obj.meow())
module.exports = crearGato;

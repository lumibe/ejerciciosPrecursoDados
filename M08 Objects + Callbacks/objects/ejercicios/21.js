function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  descuento=function(){
    return objetoProducto.precio*objetoProducto.porcentajeDeDescuento
  }
  objetoProducto['calcularPrecioDescuento']=descuento()
  return objetoProducto.precio-objetoProducto.calcularPrecioDescuento
}
obj={producto:'Chimichurria',precio:100,porcentajeDeDescuento:0.25}
console.log(agregarMetodoCalculoDescuento(obj))
module.exports = agregarMetodoCalculoDescuento;

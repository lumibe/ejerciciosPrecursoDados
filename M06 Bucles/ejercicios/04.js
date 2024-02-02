function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  entra="Not Allowed";
  if (edad>18)
    entra="Allowed";
  return entra;
}
console.log(mayoriaDeEdad(19))
module.exports = mayoriaDeEdad;

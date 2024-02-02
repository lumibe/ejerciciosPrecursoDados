function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch(numero)
  {
    case 1:
      dia="Lunes";
      break;
    case 2:
      dia="Martes";
      break;
    case 3:
      dia="Miercoles";
      break;
    case 4:
      dia="Jueves";
      break;
    case 5:
      dia="Viernes";
      break;
    case 6:
      dia="Sábado";
      break;
    case 8:
        dia="Domingo";
        break;
    default:
      dia="No es ningun dia de la semana..."    
  }
  return dia;
}
console.log(obtenerDiaSemana(4));
module.exports = obtenerDiaSemana;
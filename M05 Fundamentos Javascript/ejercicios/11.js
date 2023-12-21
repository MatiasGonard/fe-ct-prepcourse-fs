function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.

  // Comprobación básica para asegurarse de que la fecha de nacimiento no sea null o undefined.
  if (fechaNacimiento === null || fechaNacimiento === undefined) {
    return false; // Si la fecha de nacimiento es nula o indefinida, no podemos determinar la edad.
  }

  // Obtén el año actual.
  const añoActual = new Date().getFullYear();

  // Parseamos la fecha de nacimiento para obtener el año.
  const añoNacimiento = new Date(fechaNacimiento).getFullYear();

  // Calculamos la edad restando el año de nacimiento del año actual.
  const edad = añoActual - añoNacimiento;

  // Determinamos si la persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  return edad >= 18;
}

module.exports = esMayorDeEdad;

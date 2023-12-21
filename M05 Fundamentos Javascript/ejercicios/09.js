function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  if (valor === null || valor === undefined) {
    // Si este valor es null o undefined, retorna true.
    return true;
  } else {
    // De lo contrario, retorna false.
    return false;
  }
}

module.exports = esNuloOIndefinido;
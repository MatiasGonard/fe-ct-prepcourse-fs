function esNumeroEntero(numero) {
  // Utilizamos Number.isInteger() para verificar si el número es un entero.
  return Number.isInteger(numero);
}

module.exports = esNumeroEntero;
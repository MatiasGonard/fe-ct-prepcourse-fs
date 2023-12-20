function esTipoDato(valor) {
  return typeof valor;
}

module.exports = esTipoDato;
console.log(esTipoDato("Hola"));  // Devolverá "string"
console.log(esTipoDato(42));       // Devolverá "number"
console.log(esTipoDato(true));     // Devolverá "boolean"
console.log(esTipoDato({}));        // Devolverá "object"
console.log(esTipoDato(null));      // Devolverá "object" (¡cuidado con este caso particular!)
console.log(esTipoDato(undefined)); // Devolverá "undefined"
console.log(esTipoDato(function(){})); // Devolverá "function"

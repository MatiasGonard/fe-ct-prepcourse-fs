function esPositivo(num) {
  if (num > 0) {
    return "Es positivo";
  } else if (num < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}

module.exports = esPositivo;

function esFechaValida(fecha) {
  const dateObject = new Date(fecha);

  return (
    !isNaN(dateObject.getTime()) &&
    dateObject.toISOString().slice(0, 10) === new Date(fecha).toISOString().slice(0, 10) &&
    dateObject.getFullYear() > 1970
  );
}


module.exports = esFechaValida;

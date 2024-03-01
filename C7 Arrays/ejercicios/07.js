function ordenarArray(array) {
  // Verificar si el array es de tipo numérico o de tipo string
  if (array.length === 0 || typeof array[0] === 'number') {
    // Si es de tipo numérico o el array está vacío, ordenar como números
    return array.sort(function(a, b) {
      return a - b;
    });
  } else if (typeof array[0] === 'string') {
    // Si es de tipo string, ordenar alfabéticamente
    return array.sort(function(a, b) {
      return a.localeCompare(b); // comparar dos cadenas de caracteres
    });
  } else {
    // Otro tipo de array, devolver sin cambios
    return array;
  }
}

module.exports = ordenarArray;

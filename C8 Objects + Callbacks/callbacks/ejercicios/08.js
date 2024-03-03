const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retórnalo.
  // Si el elemento no se encuentra, devuelve el mensaje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.

  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      // If the callback condition is met, return the found element
      return array[i];
    }
  }

  // If no element is found, return the specified message
  return "No se encontró el elemento";
};

module.exports = buscarElemento;

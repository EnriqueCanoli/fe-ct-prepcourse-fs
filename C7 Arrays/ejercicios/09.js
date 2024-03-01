function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var index = Math.floor(Math.random() * array.length);
   console.log(index);
   return array[index];
}

module.exports = obtenerElementoAleatorio;

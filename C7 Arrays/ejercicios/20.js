function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for(let i=1; i<array.length; i++){
    if(array[i-1] != array[i]) return false;

  }
  return true;
}

module.exports = todosIguales;

function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var max=0;
  for(let i=1; i < array.length ; i++){
    if(array[i] > array[max]) max = i;

  }
  return max;

}

module.exports = encontrarIndiceMayor;

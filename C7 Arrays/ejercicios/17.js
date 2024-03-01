function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sum=0;
  for(let i=0; i<arrayOfNums.length; i++){
    sum += arrayOfNums[i];

  }
  return sum;
}

module.exports = agregarNumeros;

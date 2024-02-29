function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var count = 0;
  while(Math.floor(num) > 0){
    count ++;
    num = num/10;
  }
  return count == 3? true: false;
}

module.exports = tieneTresDigitos;

function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  for(let i=0; i < array.length; i++){
    console.log(array[i] * 2);
    array[i] = array[i] * 2;
  }
  console.log(array);
  return array;
}
duplicarElementos([0, 4, 8]);

module.exports = duplicarElementos;

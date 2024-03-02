function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sum=0;
  for(let i=0; i<resultadosTest.length; i++){
    sum += resultadosTest[i];
  }

  return sum/resultadosTest.length;
}

module.exports = promedioResultadosTest;

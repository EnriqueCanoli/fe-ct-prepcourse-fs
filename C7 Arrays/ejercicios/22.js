function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var multiplos = [];
  for(let i=0; i <= 60; i++){
    if(i % 6 == 0) multiplos.push(i);

  }
  return multiplos;
}

module.exports = tablaDelSeis;

function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  while(numero > 2){
    if(numero == 4) return true;
    numero =  Math.sqrt(numero);
  }
  return false;
}

module.exports = esPotenciaDeDos;

function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
 
  // Si el número es menor o igual a 0, no es una potencia de 2.
  if (numero <= 0) {
    return false;
  }

  // Dividir el número por 2 hasta que sea diferente de 1.
  while (numero !== 1) {
    // Si el número no es divisible por 2, no es una potencia de 2.
    if (numero % 2 !== 0) {
      return false;
    }

    // Dividir el número por 2.
    numero /= 2;
  }

  // Si el bucle termina y el número es 1, es una potencia de 2.
  return true;
}

module.exports = esPotenciaDeDos;


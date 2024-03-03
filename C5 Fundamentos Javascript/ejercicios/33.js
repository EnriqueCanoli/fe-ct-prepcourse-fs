function esNumeroPrimo(numero) {
   // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) {
      return false;
  }

  
  for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
          return false; // No es primo
      }
  }
  
  return true; // Es primo
}


module.exports = esNumeroPrimo;


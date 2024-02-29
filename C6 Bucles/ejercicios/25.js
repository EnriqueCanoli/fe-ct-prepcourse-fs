function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   let p1 =0;
   let p2 = string.length -1 ;
   while(p1 < p2){
      if(string[p1] != string[p2]) return false;
      p1++;
      p2--;
   }
   return true;
}

module.exports = esPalindromo;

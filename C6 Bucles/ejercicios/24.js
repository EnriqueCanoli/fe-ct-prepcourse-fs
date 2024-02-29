function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   var nuevoString = "";
   for(let i = texto.length - 1; i >= 0 ; i--){
      nuevoString += texto[i];
   }
   
   return nuevoString;
}


module.exports = invertirTexto;

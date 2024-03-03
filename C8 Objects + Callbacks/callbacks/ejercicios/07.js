function filter(arrayOfStrings) {
   // Debes identificar todos los elementos en el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let newArray = [];
   for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0].toLowerCase() === 'a') newArray.push(arrayOfStrings[i]);
   }
   return newArray;
}


module.exports = filter;

function deObjetoAarray(objeto) {
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  const charCount = {};
  const sortedString = string.split('').sort().join('');
  
  for (const char of sortedString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

function capToFront(string) {
  const upperCaseChars = string.match(/[A-Z]/g) || [];
  const lowerCaseChars = string.match(/[a-z]/g) || [];

  return upperCaseChars.join('') + lowerCaseChars.join('');
}

function asAmirror(frase) {
  const words = frase.split(' ');
  const mirroredWords = words.map(word => word.split('').reverse().join(''));
  return mirroredWords.join(' ');
}

function capicua(numero) {
  const strNumero = numero.toString();
  const reversedStrNumero = strNumero.split('').reverse().join('');

  return strNumero === reversedStrNumero ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
  return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  const intersection = array1.filter(value => array2.includes(value));
  return intersection;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

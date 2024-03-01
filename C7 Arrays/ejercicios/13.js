function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  /*
  Esta solucion no sirve, ya que splice "ajusta el arreglo", si elimnar el elemento de psocion 1, el de la posicion 2
  se reccore, tomando su nuevo indice, cambian los indices y su tamaño, no es estatico
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 != 0) array.splice(i,1);//el 1 indica cuantos a eliminar apartir del indice

  }
  return array;*/

  let arrayNumerosPares = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayNumerosPares.push(array[i]);
    }
  }

  return arrayNumerosPares;
}
}

module.exports = filtrarNumerosPares;

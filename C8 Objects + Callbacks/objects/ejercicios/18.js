function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  let arr = objetoUsuario["amigos"];
  arr.push(nuevoAmigo);
  
  return objetoUsuario;

}

module.exports = agregarAmigo;

function multiplicarArgumentos() {
  if (arguments.length === 0) {
    return 0;
  }

  if (arguments.length === 1) {
    return arguments[0];
  }

  let producto = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  return producto;
}

module.exports = multiplicarArgumentos;

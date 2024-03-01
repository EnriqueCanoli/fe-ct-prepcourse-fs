function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let p1 = 0;
  let p2 = array.length -1;
  
  while(p1 < p2){
    let saved = array[p1];
    array[p1] = array[p2];
    array[p2] = saved;
    p1 ++;
    p2--;
    console.log(array);
  }
  console.log("final " , array);
  return array;

}
invertirArray([1,2,3,4,5])
module.exports = invertirArray;

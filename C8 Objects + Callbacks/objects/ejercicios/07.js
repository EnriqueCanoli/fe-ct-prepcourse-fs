/*
Function Definition: The sort function takes two parameters:

sortBy: a string representing a property name.
list: an array of objects that need to be sorted.
Sorting with list.sort(): The core sorting logic is implemented using the sort method of arrays. It sorts the array in place, meaning it modifies the original array.

Custom Comparison Function: The sort method requires a comparison function that defines the sort order. In this case, the comparison function takes two objects (a and b) from the array.

Accessing the sortBy Property: Inside the comparison function, it retrieves the values of the property specified by sortBy for the two objects (sortByA and sortByB).

Descending Order Logic: The comparison function is designed to sort the array in descending order. It uses a series of conditional statements to determine the order:

If sortByA is greater than sortByB, return -1 (indicating that a should come before b).
If sortByA is less than sortByB, return 1 (indicating that b should come before a).
If they are equal, return 0 (indicating no change in order).
Returning the Sorted List: After the sort method has sorted the array in place, the function returns the modified list.
*/ 
function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
 
   // Use the sort method with a custom comparison function
   list.sort((a, b) => {
     // Access the sortBy property in each object
     const sortByA = a[sortBy];
     const sortByB = b[sortBy];
 
     // Compare in descending order
     if (sortByA > sortByB) {
       return -1;
     } else if (sortByA < sortByB) {
       return 1;
     } else {
       return 0;
     }
   });
 
   return list;
 }
 
 module.exports = sort;
 
function esAnagrama(str1, str2) {
   // Check if the lengths are the same
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();
   
   if (str1.length !== str2.length) {
     return false;
   }
 
   // Sort the characters and compare
   const sortedStr1 = str1.split('').sort().join(''); 
   const sortedStr2 = str2.split('').sort().join('');
 
   return sortedStr1 === sortedStr2;
 }
 
 module.exports = esAnagrama;
 
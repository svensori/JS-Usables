/**
 * Removes duplicates from array
 */

 const array = [1, 1, 2, 3, 4, 4, 4, 5];

 function removeDuplicates(list) {
     return Array.from(new Set(list))
 }

 console.log(removeDuplicates(array)); // Output: [ 1, 2, 3, 4, 5 ]
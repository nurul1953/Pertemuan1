let array1 = [1, 2, 3];
let array2 = [...array1, 7];
let array3 = [...array1, 4, 5, 6, ...array2,]
console.log(array3);
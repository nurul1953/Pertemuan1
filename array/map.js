// Map untuk buat array baru, so harus ditampung dg var baru
// dg arrow
// const numbers = [1, 4, 9, 16];
// const newNumbers = numbers.map((number) => number * 2);
// console.log(newNumbers);

// tdk dg arrow
const numbers = [1, 4, 9, 16];
const newNumbers = numbers.map(function (number) {
  return "angka "+number;
});
console.log(newNumbers);

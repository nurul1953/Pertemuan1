// Array destructuring
let a, b, c;
[a, b, c] = [10, 20, 30];
console.log(a, b, c);
console.log(a+","+b+","+c);
console.log(`${a}, ${b}, ${c}`);

// Object destructuring
let mahasiswa = {
    nama: "Nurul",
    umur: 19,
};

// cara biasa
// let nama = mahasiswa.nama;
// let umur = mahasiswa.umur;

// cara dest
let {nama, umur}=mahasiswa;

console.log(nama, umur);
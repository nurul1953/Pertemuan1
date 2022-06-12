const mahasiswa = {
  nama: "Aris Purnama",
  angkatan: {
    nama: "Neophyte",
  },
};

// console.log(mahasiswa.programStudi.nama);
// output: error
// karena programStudi bernilai undefined
// program mencoba mendapatkan nama dari undefined

// pakai ? untuk menghindari error jk dia undefine
console.log(mahasiswa.programStudi?.nama);
// output: undefined

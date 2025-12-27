// Belajar Unndifined dan Null di dalam JavaScript
// Undifined adalah sebuah kondisi dimana sebuah variabel telah dideklarasikan namun belum memiliki nilai atau isi
let nama;
console.log(nama); // Output: undifined

// Contoh lain dari undifined adalah ketika kita mencoba mengakses elemen array yang berada di luar index yang telah ditentukan
const angka = [10, 20, 30, 40, 50];
console.log(angka[7]); // Output: undifined

// Null adalah sebuah kondisi dimana sebuah variabel telah dideklarasikan dan sengaja diberikan nilai kosong atau tidak ada isinya
let pekerjaan = null;
console.log(pekerjaan); // Output: null

const sepatu = null;
console.log(sepatu); // Output: null

// Perbedaan antara undifined dan null adalah undifined menunjukkan bahwa variabel belum memiliki nilai sama sekali,
// sedangkan null menunjukkan bahwa variabel telah diberikan nilai kosong secara sengaja.
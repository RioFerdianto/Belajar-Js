// Belajar Array di dalam JavaScript
// Array adalah tipe data yang digunakan untuk menyimpan banyak nilai dalam satu variabel

const buah = ["Mangga", "Apel", "Pisang", "Jeruk"];
console.log(buah.length);
console.log(buah[2]);

const user = ['Rio', 'Ferdi', 'Dani', 'Rina', 'Sari'];
const teks = 'Hallo ini adalah jumlah user aplikasi' + ' ' + user.length + ' ' + 'orang';
console.log(teks);

// Kondisi dimana kita ingin mengecek apakah sebuah nilai ada di dalam array atau tidak mengunakan method includes()
const newUser = user.includes('Joko');
console.log(newUser);

const siswa = ['Andi', 
    'Budi', 
    'Citra', 
    'Dewi'
];
const cekSiswa = siswa.includes('Rio');
if (cekSiswa) {
    console.log("Siswa ditemukan");
} else {
    console.log("Siswa tidak ditemukan");
}

// Contoh penggunaan index yang dimana kita ingin mengambil nilai dari array berdasarkan posisi indexnya
// dalam java script index array dimulai dari 0
const myFoods = ['Nasi Goreng', 
    'Mie Ayam', 
    'Sate', 
    'Bakso'
];
const faviriteFood = (myFoods[1]);
console.log('Makanan favorit saya adalah' + ' ' + faviriteFood);

// Belajar mengenai function di dalam JavaScript
// Function adalah blok kode yang dirancang untuk melakukan tugas tertentu dan dapat digunakan kembali

function getUserName() {
    const userName = "Rio Ferdianto";
    console.log(userName); 
}
getUserName(); // Memanggil function getUserName ini bisa digunakan berkali-kali tanpa perlu menulis ulang kodenya
getUserName();

function getFullName(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    console.log('Selamat ulang tahun,'+ ' '+fullName);
}
getFullName("Rio", "Ferdianto"); // Memanggil function dengan memberikan argumen

function getNumber (nilai) {
    if (nilai == 0) {
        console.log("Netral");
    }else if (nilai > 0) {
        console.log("Positif");
    }else {
        console.log("Negatif");
    }
}
getNumber(10); // Memanggil function dengan memberikan argumen nilai 10
getNumber(-5); // Memanggil function dengan memberikan argumen nilai -5
getNumber(0); // Memanggil function dengan memberikan argumen nilai 0

function calculateArea(length, width) {
    const area = length * width;
    return area; // Mengembalikan nilai area
}
const area1 = calculateArea(5, 10); // Memanggil function dan menyimpan hasilnya dalam variabel area1
console.log('Luas persegi panjang adalah: ' + area1);

const area2 = calculateArea(7, 3); // Memanggil function dan menyimpan hasilnya dalam variabel area2
console.log('Luas persegi panjang adalah: ' + area2);

function data(x , y) {
    const sum = x + y;
    console.log('Hasil penjumlahan dari: '+ x + ' ditambah ' + y + ' sama dengan ' + sum);
}
data(15, 25); // Memanggil function dengan memberikan argumen 15 dan 25



// Belajar scope dan return di dalam JavaScript
function getValue() {
    const value = 100;
    return value; // Mengembalikan nilai value
}
const result = getValue(); // Memanggil function dan menyimpan hasilnya dalam variabel result
console.log('Nilai yang dikembalikan dari function adalah: ' + result);

function greet(name) {
    return 'Halo, ' + name + '! Selamat datang di belajar JavaScript.'; // Mengembalikan string sapaan
}
const greetingMessage = greet('Rio'); // Memanggil function dengan argumen 'Rio' dan menyimpan hasilnya
console.log(greetingMessage);

function multiply(a, b) {
    return a * b; // Mengembalikan hasil perkalian
}
const product = multiply(6, 7); // Memanggil function dengan argumen 6 dan 7
console.log('Hasil perkalian adalah: ' + product);

function isEven(number) {
    if (number % 2 === 0) {
        return true; // Mengembalikan true jika angka genap
    } else {
        return false; // Mengembalikan false jika angka ganjil
    }
}
const checkEven = isEven(10); // Memanggil function dengan argumen 10
console.log('Apakah 10 adalah angka genap? ' + checkEven);

const checkOdd = isEven(7); // Memanggil function dengan argumen 7
console.log('Apakah 7 adalah angka genap? ' + checkOdd);
// Dalam function kita tidak dapat mengakses variabel yang berada di luar scope function
// Namun kita dapat mengakses variabel yang berada di dalam scope function dari luar function dengan menggunakan return statement
// Dari dalam bisa keluar tapi dari luar tidak bisa masuk
// Jika sudah menggunakan return maka script setelahnya tidak akan dieksekusi

function gold (numner1 , number2) {
    const total = numner1 + number2;
    return total;
}
const finalGold = gold(50, 70);
console.log('Total emas yang didapatkan adalah: ' + finalGold);
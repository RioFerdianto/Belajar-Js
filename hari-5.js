// Belajar mengenai object yang dimana membungkus semua tipe data di dalamnya

// Ini mememiliki data orang    
const name = "Rio"; // tipe data primitif string
const age = 20; // tipe data primitif number
const isMarried = false; // tipe data primitif boolean
const isWeight = 60;

// Data Buah kita tidak bisa membuat data name 2 kali

const person = {
    name: "Rio",
    age: 20,
    isMarried: false,
    isWeight: 60
};
const school = {
    name: "Rio",
    institution: "Politeknik Takumi",
    yearIn: 2022,
    yearOut: 2026,
    major: "Teknologi Informasi"
};
// Dengan begini perulangan data name dapat bisa dilakukan dan dibaca dengan mudah
console.log(person);
console.log(school);

const person2 = {
    name : "Ferdi",
    age : 22,
    isBron : "3 April 2003",
    isWork : true
}
console.log(person2.isBron);


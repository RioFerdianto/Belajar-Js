let nama = 'Rio Ferdianto';
let umur = 22;
let tinggiBadan = 175;
let beratBadan = 60;
let pacar = null;

if (pacar === null) {
    pacar = 'belum punya';
}else {
    pacar = 'punya pacar';
}
alert('nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan} cm berat badan saya ${beratBadan} kg pacar saya ${pacar}' 
);

// for loop
for (let i = 1; i <= 5; i++) {
    console.log('Perulangan ke-' + i);
}

// while loop
let count = 1;
while (count <= 5) {
    console.log('Hitungan ke-' + count);
    count++;
}

const fruits = ['apel', 'pisang', 'jeruk'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Belajar Arrow Function di dalam JavaScript
// Arrow Function adalah cara singkat untuk menulis fungsi di JavaScript

const greet = (name) => {
    return 'Halo, ' + name + '! Selamat datang di belajar JavaScript dengan Arrow Function.';
};
console.log(greet('Rio'));

const add = (a, b) => {
    return a + b;
};
console.log('Hasil penjumlahan: ' + add(5, 10));

// Jika fungsi hanya memiliki satu parameter, tanda kurung dapat dihilangkan
const square = x => {
    return x * x;
};
console.log('Hasil kuadrat: ' + square(4));

// Jika fungsi hanya memiliki satu pernyataan, tanda kurung kurawal dan kata kunci return dapat dihilangkan
const multiply = (x, y) => x * y;
console.log('Hasil perkalian: ' + multiply(3, 7));

// Arrow Function juga dapat digunakan sebagai callback function
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log('Array setelah didobel: ' + doubled);


const data = (name, age) => {
    return 'Nama saya ' + name + ' dan saya berusia ' + age + ' tahun.';
};
console.log(data('Ferdi', 25));
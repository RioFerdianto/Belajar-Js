// Dalam percabangan if else if digunakan untuk mengecek beberapa kondisi secara berurutan
// eksekusi yang dilakukan secara berurutan jika sudah ada eksekusi yang cocok maka tidak akan dilanjutkan

const Lampu = "Merah";

if (Lampu === "Merah") {
    console.log("Berhenti");
} else if (Lampu === "Kuning") {
    console.log("Hati-hati");
} else if (Lampu === "Hijau") {
    console.log("Jalan");
} else {
    console.log("Lampu tidak berfungsi");
}


const Number = 10;

if (Number <= 1) {
    console.log("Ini adalah angka satuan");
} else if (Number <= 10) {
    console.log("Ini adalah angka puluhan");
} else if (Number <= 100) {
    console.log("Ini adalah angka ratusan");
} else {
    console.log(Number);
}
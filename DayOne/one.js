// const uangAwal = 10000;
// const uangAkhir = 15000;
// const totalUang = uangAkhir - uangAwal;
// console.log("Total uang yang didapatkan: " + totalUang);

const input = process.argv[2];
const uangAwal = Number(input);  

console.log("Uang awal: " + uangAwal);


let hari = new Date().getDay();
switch (hari) {
    case 0:
        console.log("Hari ini adalah Minggu");
        break;
    case 1:
        console.log("Hari ini adalah Senin");
        break;
    case 2:
        console.log("Hari ini adalah Selasa");
        break;
    case 3:
        console.log("Hari ini adalah Rabu");
        break;
    case 4:
        console.log("Hari ini adalah Kamis");
        break;
    case 5:
        console.log("Hari ini adalah Jumat");
        break;
    case 6:
        console.log("Hari ini adalah Sabtu");
        break;
    default:
        console.log("Hari tidak valid");
        break;
}
let a = 0, b = 1;
console.log(a); // angka pertama
console.log(b); // angka kedua
// Tulis kode for loop di sini untuk 6 angka berikutnya
for (let i = b; i <= 6; i++) {
    let sum = a + b;
    a = b
    b = sum
    console.log(sum)
}
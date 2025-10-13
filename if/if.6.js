let totalBelanja = 350000;
// Tulis kode if-else if statement di sini
let totalBayar;
let diskon;
if (totalBelanja >= 500000) {
    diskon = 20;
    
} else if (totalBelanja >= 200000) {
    diskon = 10;
   
} else if (totalBelanja >= 100000) {
    diskon = 5;
   
}
totalBayar = totalBelanja -(totalBelanja * (diskon/100))
console.log(`
    Total belanja: Rp ${totalBelanja}
    diskon: ${diskon} %
    Total bayar: Rp ${totalBayar}`)
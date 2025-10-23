let angka = 2;
let iterasi = 0;
// Tulis kode while loop di sini untuk pengkuadratan berulang
let hasil = angka;
while(hasil < 1000){
    hasil = Math.pow(angka, 2)
    iterasi++
    console.log(`Iterasi ${iterasi}: ${hasil}`);
    angka = hasil;
}
console.log("Angka " + 2 + " harus dikuadratkan " + iterasi + " kali untuk melebihi 1000");
console.log("Hasil akhir: " + angka);
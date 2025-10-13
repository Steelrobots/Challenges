let jenisKendaraan = "becak";
let durasi = 3; // jam
// Tulis kode if-else if-else statement di sini
let tarif;
if (jenisKendaraan == 'motor') {
    tarif = 2000
} else if (jenisKendaraan == 'mobil') {
    tarif = 5000
} else if (jenisKendaraan == 'Truk') {
    tarif = 10000
} 

if (jenisKendaraan == 'mobil' ||jenisKendaraan ==  'motor' ||jenisKendaraan ==  'truk'){
  console.log(`
Jenis kendaraan: ${jenisKendaraan}
Durasi parkir: ${durasi} jam
Tarif per jam: Rp ${tarif}
Total bayar: Rp ${tarif* durasi}`)
} else 
  console.log('Kendaraan tidak diizinkan')
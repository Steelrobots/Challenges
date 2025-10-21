let kata = "programming";
let i = 0;
let ditemukan = false;
// Tulis kode while loop di sini untuk mencari huruf 'a'
while(i == 0){
    let hasil = kata.indexOf('a')
    i = hasil
    if(i !== -1){
    ditemukan = true
    }
}
if (ditemukan) {
  console.log("Huruf 'a' ditemukan di posisi: " + i);
} else {
  console.log("Huruf 'a' tidak ditemukan");
}
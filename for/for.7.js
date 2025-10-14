let kata = "programming";
let jumlahVokal = 0;
// Tulis kode for loop di sini untuk menghitung vokal
let vokal = 'aiueo'
for (let i = 0; i < kata.length; i++) {
     let huruf = kata[i].toLowerCase();
    if(vokal.includes(huruf)){
        jumlahVokal++
    }
    
}
console.log("Jumlah vokal: " + jumlahVokal);
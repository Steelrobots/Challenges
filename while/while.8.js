let teks = "   hello world   ";
let langkah = 0;
// Tulis kode while loop di sini untuk menghapus spasi awal
while (teks.startsWith(' ') ) {
    if(teks.startsWith(' ')){
        teks = teks.slice(1);
        langkah++
        console.log(`Langkah ${langkah}: ${teks}`)
    }

}
console.log("Hasil akhir: '" + teks + "'");
console.log("Total spasi yang dihapus: " + langkah);
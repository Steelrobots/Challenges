let angkaRandom;
let percobaan = 0;
// Tulis kode do-while loop di sini untuk generate angka genap
let berhasil;
do {

    angkaRandom = Math.floor(Math.random() * 100) + 1
    if (angkaRandom % 2 !== 0) {
        percobaan += 1
        console.log(`Percobaan ${percobaan}: ${angkaRandom} (ganjil, coba lagi)`)
        berhasil = false
    } else {
        console.log(`percobaan ${percobaan}: ${angkaRandom} (genap, selesai!)`)
        berhasil = true
    }

} while (!berhasil)
console.log("Angka genap ditemukan: " + angkaRandom + " dalam " + percobaan + " percobaan");
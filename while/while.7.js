
waktu = 10;
let tombolDitekan = false;
// Simulasi: tombol akan ditekan pada detik ke-7
let ditekan = 7
// Tulis kode while loop di sini untuk countdown timer
while (waktu >= 1 || tombolDitekan == false) {
    console.log(`Countdown: ${waktu}`)
    if (ditekan == waktu) {

        tombolDitekan = true
        break;

    }
    waktu--
    if (waktu < 1) {
        break; // keluar dari loop saat waktu habis
    }
}
if (tombolDitekan) {
    console.log("Timer dihentikan oleh user pada detik ke-" + waktu);
} else {
    console.log("Countdown selesai!");
}

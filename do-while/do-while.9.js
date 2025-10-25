const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let tahapInstalasi = ["Download file", "Extract file", "Install program", "Setup konfigurasi"];
let berhasil = false;
let percobaan = 0;
// Tulis kode do-while loop di sini untuk simulasi instalasi
async function main() {
    let ulang
    do {
        percobaan += 1
        console.log(`=== PERCOBAAN INSTALASI 1 ===`)
        berhasil = true

        for (let i = 0; i < tahapInstalasi.length; i++) {
            let random = Math.random() < 0.5;
            if (!random) {
                console.log(`${tahapInstalasi[i]}... Gagal!`)
                berhasil = false
                break;

            } else {
                console.log(`${tahapInstalasi[i]}... berhasil`)
            }

        }
        if (!berhasil) {
            const jawab = await new Promise(resolve => {
                rl.question('Instalasi gagal! Coba lagi? (y/n)', input => {
                    resolve(input.toLowerCase())
                })
            })
            ulang = (jawab === "y")
        } else ulang = false


    } while (ulang)
    rl.close()
    if (berhasil) {
        console.log("Instalasi berhasil dalam " + percobaan + " percobaan!");
    } else {
        console.log("Instalasi dibatalkan setelah " + percobaan + " percobaan.");
    }
}
main()

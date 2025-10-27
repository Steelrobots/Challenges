const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 100000;
let pilihan;
let lanjut;
// Tulis kode do-while loop di sini
async function main() {

    do {
        pilihan = await rl.question(`
            === ATM MENU ===
1. Cek Saldo
2. Tarik Tunai
3. Setor Tunai
4. Keluar
Pilih menu:`);
        switch (pilihan) {
            case "1":
                console.log(`Saldo Anda: Rp${saldo}`)
                break;
            case "2":
                const tarikA = await rl.question('Masukkan jumlah: ');
                const tarik = parseInt(tarikA)
                if (tarik <= 0) {
                    console.log('Saldo anda tidak mencukupi')
                } else {
                    saldo -= tarik;
                    console.log(`Penarikan berhasil. Saldo: Rp${saldo}`)
                }
                break;
            case "3":
                const setorA = await rl.question('Masukkan jumlah: ')
                const setor = parseInt(setorA)
                saldo += setor
                console.log(`Setor Tunai berhasil. Saldo: Rp${saldo}`)
                break;
            case "4":
                lanjut = false
                break;
            default:
                console.log('Menu yang anda pilih tidak ada! Silahkan coba lagi(1-4)')
        }
        if (pilihan !== "4") {
            const jawab = await rl.question("Apakah ingin melakukan transaksi lain? (y/n): ");
            const jawaban = (jawab || "").toLowerCase();

            if (jawaban === "y") {
                lanjut = true;
            } else {
                lanjut = false;
            }
        }

    } while (lanjut)
    rl.close()
}
main().then(() => {
    console.log("Terima kasih telah menggunakan ATM!");
});


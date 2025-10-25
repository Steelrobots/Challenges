const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 100000;
let pilihan;
let lanjut;
// Tulis kode do-while loop di sini
async function main() {
    console.log(pilihan)

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
                const tarikA = await rl.question('Masukkan jumlah');
                const tarik = parseInt(tarikA)
                if (tarik <= 0) {
                    console.log('Saldo anda tidak mencukupi')
                } else {
                    saldo -= tarik;
                    console.log(`Penarikan berhasil. Saldo: Rp${saldo}`)
                }
                break;
            case "3":
                const setorA = await rl.question('Masukkan jumlah:')
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
            // pastikan jawab selalu string
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

// import readline from 'readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });

// let saldo = 100000;
// let pilihan;
// let lanjut = true;

// do {
//   pilihan = await rl.question(`
// === ATM MENU ===
// 1. Cek Saldo
// 2. Tarik Tunai
// 3. Setor Tunai
// 4. Keluar
// Pilih menu: `);

//   switch (pilihan) {
//     case "1":
//       console.log(`Saldo Anda saat ini: Rp${saldo}`);
//       break;

//     case "2": {
//       const tarikStr = await rl.question("Masukkan jumlah penarikan: ");
//       const tarik = parseInt(tarikStr);
//       if (isNaN(tarik) || tarik <= 0) {
//         console.log("Masukkan nominal yang valid!");
//       } else if (tarik > saldo) {
//         console.log("Saldo tidak cukup!");
//       } else {
//         saldo -= tarik;
//         console.log(`Penarikan berhasil. Sisa saldo: Rp${saldo}`);
//       }
//       break;
//     }

//     case "3": {
//       const setorStr = await rl.question("Masukkan jumlah setoran: ");
//       const setor = parseInt(setorStr);
//       if (isNaN(setor) || setor <= 0) {
//         console.log("Masukkan nominal yang valid!");
//       } else {
//         saldo += setor;
//         console.log(`Setoran berhasil. Saldo sekarang: Rp${saldo}`);
//       }
//       break;
//     }

//     case "4":
//       lanjut = false;
//       break;

//     default:
//       console.log("Pilihan tidak valid! Silakan pilih 1-4.");
//   }

//   // Jika belum memilih keluar, tanya apakah mau lanjut
//   if (pilihan !== "4") {
//     const jawab = await rl.question("Apakah ingin melakukan transaksi lain? (y/n): ");
//     if (jawab.toLowerCase() === "y") {
//       lanjut = true;
//     } else {
//       lanjut = false;
//     }
//   }

// } while (lanjut);

// rl.close();
// console.log("Terima kasih telah menggunakan ATM!");

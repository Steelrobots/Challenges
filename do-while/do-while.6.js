const readline = require("readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let soal = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
let jawaban = [8, 6, 14];
let jawabanUser;
let lanjut;
let nomorSoal = 0;
let benar = 0;
// Tulis kode do-while loop di sini untuk kuis
async function main() {
    do {
        console.log(`Soal ${nomorSoal +1}: ${soal[nomorSoal]}`)
        jawabanUser =parseInt( await rl.question('Jawaban kamu: '))
        if(jawabanUser === jawaban[nomorSoal] ){
            console.log('Benar!')
            benar++
        } else{
            console.log(`salah! Jawaban yang benar: ${jawaban[nomorSoal]}`)
        }
        nomorSoal++
        if(nomorSoal < soal.length){
            const tanya = await rl.question('Ingin lanjut ke soal berikutnya? (y/n)' )
            lanjut = (tanya ==="y")
        } else lanjut = false

    } while (lanjut)
        rl.close()
        console.log("Kuis selesai! Skor: " + benar + "/" + nomorSoal);
}
main()
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dadu;
let mainLagi;
let totalSkor = 0;
// Tulis kode do-while loop di sini untuk game dadu
async function main() {
    do {
        console.log('Melempar dadu...')
        dadu = Math.floor(Math.random() * 6) + 1;
        console.log(`Hasil: ${dadu}`);
        totalSkor += dadu;
        console.log(`Total skor: ${totalSkor}`)

        if (dadu === 6) {
            console.log('Jackpot! Bonus lemparat!')
            const bonus = Math.floor(Math.random() * 6) + 1;
            totalSkor += bonus;
            console.log(`Total skor: ${totalSkor}`)
        }
        const jawab = await new Promise(resolve => {
            rl.question("Main lagi? (y/n): ", (input) => resolve(input.trim().toLowerCase()));
        });
        if (jawab === "y") {
            mainLagi = true;
        } else {
            mainLagi = false;
        }




    } while (mainLagi)
    rl.close();
    console.log("Game selesai! Total skor: " + totalSkor);
}
main()
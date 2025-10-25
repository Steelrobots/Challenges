const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let namaDepan = "user";
let username;
let puas;
let percobaan = 0;
// Tulis kode do-while loop di sini untuk generate username
async function main() {
    do {
        percobaan += 1
        const noRandom = Math.floor(Math.random() * 9000) + 1000;

        username = namaDepan + `${noRandom}`

        console.log(`Percobaan ${percobaan}: Username yang dihasilkan: ${username}`)

        let confirmation = await new Promise(resolve => {
            rl.question('Apakah Anda puas dengan username ini? (y/n): ', resolve)

        })
        puas = (confirmation.trim().toLowerCase() === "y")

    } while (!puas)
    rl.close()
    console.log("Username final: " + username + " (dibuat dalam " + percobaan + " percobaan)");

}
main()

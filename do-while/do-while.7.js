const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let tahap = ["Mengisi air", "Mencuci", "Membilas", "Mengeringkan"];
let tambahBilas;
let siklusSelesai = 0;
// Tulis kode do-while loop di sini untuk simulasi mesin cuci
async function main() {
    do {
        siklusSelesai += 1
        console.log(`
        === SIKLUS PENCUCIAN ${siklusSelesai} ===
        ${tahap[0]}... selesai
        ${tahap[1]}... selesai
        ${tahap[2]}... selesai
        ${tahap[3]}... selesai`)
        let confirmation = await new Promise(resolve => {
            rl.question('Tambah siklus pembilasan? (y/n):', resolve)

        })

        tambahBilas = (confirmation.trim().toLowerCase() === "y")
    } while (tambahBilas)
    rl.close()
    console.log("Mesin cuci selesai! Total siklus: " + siklusSelesai);
}
main()
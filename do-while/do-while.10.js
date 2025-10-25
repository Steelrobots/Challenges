const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;
// Tulis kode do-while loop di sini untuk simulasi antrian bank
async function main() {
    let sisaAntrian = antrian.length
    do {
        for (let i = 0; i < antrian.length; i++) {
            sisaAntrian--
            console.log(`Melayani nasabah: ${antrian[i]}`)
            nasabahDilayani++

            if (sisaAntrian == 0) {
                console.log('Antrian kosong.')
                const antrianBaru = await new Promise(resolve => {
                    rl.question('Ada nasabah baru yang datang? (y/n):', input => {
                        resolve(input.toLowerCase())
                    })
                })
                const nasabahBaru =  await new Promise(resolve => {
                    rl.question('Ada nasabah baru yang datang? (y/n):', input => {
                        resolve(input.toLowerCase())
                    })
                }) 
                antrian.push(nasabahBaru)
                adaNasabahBaru = (antrianBaru === "y")
            } else adaNasabahBaru = false
        }

    } while (adaNasabahBaru)
    rl.close()
}
console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);
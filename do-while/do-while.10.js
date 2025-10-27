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
        // for (let i = 0; i < antrian.length; i++) {
        //     console.log(`Melayani nasabah: ${antrian[i]}`)
        //     nasabahDilayani++
        //     sisaAntrian--
        //     console.log(`sisa antrian: ${sisaAntrian}`)
        // }
        while(antrian.length >0){
            const nasabah = antrian.shift()
            console.log(`melayani nasabah:${nasabah}`)
            nasabahDilayani++
            console.log(`Sisa antrian: ${antrian.length}`)
        }
        console.log('Antrian kosong.')
        const antrianBaru = await new Promise(resolve => {
            rl.question('Ada nasabah baru yang datang? (y/n):', input => {
                resolve(input.toLowerCase())
            })
        })




        if (antrianBaru === "y") {
            const nasabahBaru = await new Promise(resolve => {
                rl.question('Nasabah baru: ', input => {
                    resolve(input.toLowerCase())
                })
            })

            antrian.push(nasabahBaru)
            adaNasabahBaru = true

        } else adaNasabahBaru = false




    } while (adaNasabahBaru)
    rl.close()

    console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);
}
main()
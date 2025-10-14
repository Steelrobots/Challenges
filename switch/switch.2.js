let pilihan = 6;
// Tulis kode switch statement di sini
let menu;
let harga;

switch (pilihan) {
    case 1:
        menu = 'Nasi Goreng'
        harga = 15000

        break;
    case 2:
        menu = 'Mie Ayam'
        harga = 15000

        break;
    case 3:
        menu = 'Bakso'
        harga = 10000

        break;
    case 4:
        menu = 'Es Teh'
        harga = 5000

        break;
    default:
        console.log('Menu tidak tersedia')
        break;
}
if (menu !== undefined) {
    console.log(`        Anda memilih: ${menu}
        Harga: Rp ${harga}`)
} 
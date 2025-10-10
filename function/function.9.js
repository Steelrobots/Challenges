// Tulis function processOrder di sini
function processOrder(namaItem, jumlah) {
    let total = jumlah * 15000;
    console.log(`
        === Detail Pesanan ===
        Item: ${namaItem}
        Jumlah: ${jumlah}
        harga per item: Rp 15000
        Subtotal : ${total}`);
    return total;

}

// Panggil function dan gunakan return value
let totalBayar1 = processOrder("Nasi Goreng", 2);
let totalBayar2 = processOrder("Mie Ayam", 3);
console.log("Total yang harus dibayar: Rp " + (totalBayar1 + totalBayar2));
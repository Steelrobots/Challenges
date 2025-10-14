// Tulis kode for loop di sini untuk membuat pola bintang
for (let t = 1; t <= 5; t++) {
    let baris = '';
    for (let p = 1; p <= t; p++) {
        baris += '*';
    }
    console.log(baris)
}
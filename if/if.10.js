let angka1 = 10;
let angka2 = 3;
let operator = "+";
// Tulis kode if-else if-else statement di sini
let hasil;
if (operator == "+") {
    hasil = angka1 + angka2
} else if (operator == "-") {
    hasil = angka1 - angka2
} else if (operator == "*") {
    hasil = angka1 * angka2
} else if (operator == "/" && angka2 != 0) {
    let bagi = angka1 / angka2
    hasil = bagi.toFixed(2)
} else hasil = null
console.log('Operator tidak valid ')

if (hasil != null)
    console.log(`${angka1} ${operator} ${angka2}= ${hasil}`)



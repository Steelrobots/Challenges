// Tulis function sumAllNumbers di sini
function sumAllNumbers(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

// Panggil function dengan jumlah parameter berbeda
let total1 = sumAllNumbers(1, 2, 3);
let total2 = sumAllNumbers(5, 10, 15, 20);
let total3 = sumAllNumbers(2, 4, 6, 8, 10, 12);
console.log("Total (1,2,3): " + total1);
console.log("Total (5,10,15,20): " + total2);
console.log("Total (2,4,6,8,10,12): " + total3);
// Tulis function manageQueue di sini
function manageQueue(arr, operation) {
    let jumlahEn = 0;
    let jumlahDe = 0;
    for (let op of operation) {
        if (op.startsWith('enqueue:')
        ) {
            let value = op.split(":")[1];
            if (!isNaN(value)) value = Number(value);
            arr.unshift(value);
            jumlahEn++

        } else if (op === 'dequeue') {
            if (arr.length === 0)
                arr.shift();
            jumlahDe++
        }
    }
    return {
        result: arr,
        stats: { enqueued: jumlahEn, dequeued: jumlahDe, operations: operation.length }
    }
}

console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));
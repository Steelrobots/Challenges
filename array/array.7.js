// Tulis function transformArray di sini
function transformArray(arr, operations) {
    let original = [...arr];

    let transformed = arr.map(num => {
        let result = num

        if (operations.multiply) {
            result *= operations.multiply;
        }
         if (operations.add) {
            result += operations.add
        }
        return result;
    })
    let sum = 0;
    let processed = 0;

    transformed.forEach((value, i) => {
        if (operations.logEach) {
            console.log(`Processing: ${original[i]} => ${value}`)
        }
        sum += value;
        processed++;
    })
    let average = sum / processed;

    return {
        original,
        transformed,
        stats: {
            sum,
            average,
            processed
        }
    }
}

let numbers = [1, 2, 3, 4, 5];
console.log(transformArray(numbers, {
    multiply: 2,
    add: 1,
    logEach: true
}));
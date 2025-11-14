// Tulis function aggregateArray di sini
function aggregateArray(arr) {

    const allNumbers = arr.every(item => typeof item === "number");
    const allStrings = arr.every(item => typeof item === "string");

    if (allNumbers) {

        return {
            original: [...arr],
            sum: arr.reduce((total, num) => total + num),
            multiply: arr.reduce((total, num) => total * num),
            max: Math.max(...arr),
            min: Math.min(...arr),
            sortedAsc: [...arr].sort((a, b) => a - b),
            sortedDesc: [...arr].sort((a, b) => b - a),

        }
    }
    if (allStrings) {
        return {
            original: [...arr],
            concatenated: arr.join(''),
            longest: arr.reduce((a, b) => a.length >= b.length ? a : b),
            shortest: arr.reduce((a, b) => a.length <= b.length ? a : b),
            sortedAsc: [...arr].sort(),
            sortedDesc: [...arr].sort().reverse(),
        }
    }

}


console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));
// Tulis function arrayAnalyzer di sini
function arrayAnalyzer(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    const median = sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    return {
        original: [...arr],
        length: arr.length,
        statistics: {
            sum: arr.reduce((total, sum) => total + sum),
            average: arr.reduce((total, sum) => total + sum) / arr.length,
            min: Math.min(...arr),
            max: Math.max(...arr),
            median: median
        },
        transformations: {
            doubled: arr.map(x => x * 2),
            squared: arr.map(x => x ** 2),
            filtered: arr.filter(n => n > 4),
            reversed: [...arr].reverse()
        },
        sorted:{
            ascending: [...arr].sort((a, b) => a - b),
            descending: [...arr].sort((a, b) => b - a)
        },
        validation:{
            allNumbers: arr.every(x => typeof x === 'number'),
            hasNegatives: arr.some(x => x < 0),
            hasZeros
        }
    }
}

let data = [5, 2, 8, 1, 9, 3];
let result = arrayAnalyzer(data);
console.log(result);
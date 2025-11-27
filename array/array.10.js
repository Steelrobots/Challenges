// Tulis function arrayAnalyzer di sini
function arrayAnalyzer(arr) {
    // Mencari Median
    const sortedArr = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    const median = sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    // Mencari Mode
    const freq = {}
    let maxCount = 0
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1
        if (freq[num] > maxCount) {
            maxCount = freq[num]
        }
    }

    let modes = null
    if (maxCount > 1) {
        modes = []

        for (const num in freq) {
            if (freq[num] === maxCount) {
                modes.push(Number(num))
            }
        }
    }


    return {
        original: [...arr],
        length: arr.length,
        statistics: {
            sum: arr.reduce((total, sum) => total + sum),
            average: Number((arr.reduce((total, sum) => total + sum) / arr.length).toFixed(2)),
            min: Math.min(...arr),
            max: Math.max(...arr),
            median: median,
            mode: modes
        },
        transformations: {
            doubled: arr.map(x => x * 2),
            squared: arr.map(x => x ** 2),
            filtered: arr.filter(n => n > 4),
            reversed: [...arr].reverse()
        },
        sorted: {
            ascending: [...arr].sort((a, b) => a - b),
            descending: [...arr].sort((a, b) => b - a)
        },
        validation: {
            allNumbers: arr.every(x => typeof x === 'number'),
            hasNegatives: arr.some(x => x < 0),
            hasZeros: arr.includes(0),
            hasDuplicates: arr.some((item, index) => arr.indexOf(item) !== index)
        }
    }
}

let data = [5, 2, 8, 1, 9, 3];
let result = arrayAnalyzer(data);
console.log(result);
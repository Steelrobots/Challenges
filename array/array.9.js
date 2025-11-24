// Tulis function validateArrayData di sini
function validateArrayData(arr) {
    const fitstType = typeof arr[0];
   
    return {
        isValid: arr.every(item => typeof item === fitstType),
        isNumber: arr.every(item => typeof item === 'number'),
        hasNull: arr.every(item => typeof item === null),
        hasUndefined: arr.every(item => typeof item === undefined),
        stats: {
            total: arr.length,
            number: arr.filter(number => typeof number === "number").length,
            strings:arr.filter(number => typeof number === "strings").length,
            nulls: arr.filter(number => typeof number === "null").length,
            undefined: arr.filter(number => typeof number === "undefined").length

        }


    }
}

let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];
console.log(validateArrayData(data1));
console.log(validateArrayData(data2));
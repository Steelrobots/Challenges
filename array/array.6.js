// Tulis function searchArray di sini
function searchArray(arr, criteria) {
    const { type, value, condition } = criteria;

    let check;

    if (condition === "greater") {
        check = (item) => item > value
        console.log("greater")
    } else if (condition === "less") {
        check = (item) => item < value
        console.log("less")
    } else if (condition === "contains") {
        check = (item) => typeof item === type && item.includes(value);
        console.log("contains")
    }

    const filtered = arr.filter(check)
    return {
        found: arr.find(check),
        filtered: filtered,
        includes: arr.includes(value),
        count: filtered.length
    };
}

let numbers = [1, 5, 10, 15, 20];
console.log(searchArray(numbers, { type: "number", value: 10, condition: "greater" }));

let words = ["apple", "banana", "cherry"];
console.log(searchArray(words, { type: "string", value: "an", condition: "contains" }));
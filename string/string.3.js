// Tulis function convertCase di sini
function convertCase(text, mode) {
    if (mode === "upper") {
        return text.toUpperCase()
    }
    else if (mode === "lower") {
        return text.toLowerCase()
    }
    else if (mode === "title") {
        return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
    }


}

console.log(convertCase("hello world", "upper"));
console.log(convertCase("HELLO WORLD", "lower"));
console.log(convertCase("hello world", "title"));
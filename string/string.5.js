// Tulis function extractText di sini
function extractText(text, start, end) {
    let hasil = text.substring(start, end)
    return { result: hasil , success: text.includes(hasil), original: text  }
}
console.log(extractText("JavaScript", 0, 4));
console.log(extractText("Programming", 3, 7));
console.log(extractText("Hello", 10, 15));
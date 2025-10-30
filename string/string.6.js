// Tulis function processWords di sini
function processWords(sentence){
    return {word: sentence.split(' '), count: sentence.split(' ').length, reversed: sentence.split(' ').reverse().join(' ') }
}

console.log(processWords("Hello beautiful world"));
console.log(processWords("JavaScript is awesome"));
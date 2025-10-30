// Tulis function analyzeCharacters di sini
function analyzeCharacters(str){
    let hasil = []
    for(let i =0;i< str.length; i++){
        hasil.push({char: str.charAt(i), position: i})
    }
    return hasil
}

console.log(analyzeCharacters("Hi"));
console.log(analyzeCharacters("Code"));
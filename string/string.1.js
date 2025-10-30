// Tulis function getStringInfo di sini
function getStringInfo(str) {

    return { length: str.length, first: str.charAt(0), last: str.charAt(str.length - 1) }

}

console.log(getStringInfo("Hello"));
console.log(getStringInfo("JavaScript"));
console.log(getStringInfo("A"));
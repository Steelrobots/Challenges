// Tulis function searchInText di sini
function searchInText(text, searchTerm) {
    return { found: text.toLowerCase().includes(searchTerm.toLowerCase()), firstIndex: text.toLowerCase().indexOf(searchTerm.toLowerCase()), count: text.toLowerCase().split(searchTerm.toLowerCase()).length - 1 };
}

console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));
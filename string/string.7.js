// Tulis function replaceText di sini
function replaceText(text, oldText, newText) {
    return { result: text.replaceAll(oldText, newText), replacements: (text.split(oldText).length - 1), original: text };
}

console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));
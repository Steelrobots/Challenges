// Tulis function textAnalyzer di sini
function textAnalyzer(text) {
    const words = text.trim().split(' ')
    let longest = words.reduce((a, b) => a.length >= b.length ? a : b)
    let shortest = words.reduce((a, b) => a.length <= b.length ? a : b);
    let number
    for (let i = 0; i <= 9; i++) {
        if (text.includes(i.toString())) number = true;
        else number = false;
    }


    return {
        original: text,
        cleaned: text.trim(),
        stats: {
            totalLength: text.length,
            cleanedLength: text.trim().length,
            wordCount: text.trim().split(' ').filter(word => word.length > 1).length,
            sentenceCount: text.split('.').length,
            upperCaseCount: text.split('').filter(char => char >= 'A' && char <= 'Z').length,
            lowerCaseCount: text.split('').filter(char => char >= 'a' && char <= 'z').length
        },
        words: words,
        longestWord: longest,
        shortestWord: shortest,
        hasNumber: number,
        hasSepecialChar: /[!@#$%^&*(),.?":{}|<>]/g.test(text)

    }
}



let result = textAnalyzer("  Hello World! This is a TEST string.  ");
console.log(result);
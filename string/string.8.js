// Tulis function cleanAndFormat di sini
function cleanAndFormat(text, width) {
    let clean =  text.trim().replace(/\s+/g, ' ');
    let pad = Math.floor((width - clean.length) / 2);
    let padded = " ".repeat(pad) + clean + " ".repeat(width - clean.length - pad);

    return {text:clean,padded: padded,width: width};
}

console.log(cleanAndFormat("  Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat("  Code  ", 8));
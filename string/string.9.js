// Tulis function validateEmail di sini
function validateEmail(email){
    

    return {valid: email.includes("@"), email: email.trim(), checks: {
        hasAt: email.includes("@"),
        hasDot: email.includes("."),
        validLength: email.trim().length >= 3 <= 254,
        noSpaces: !/\s/.test(email.trim())
    }}
}

console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("  test@domain.co.id  "));
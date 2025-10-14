let angka1 = 15;
let angka2 = 4;
let operator = "%";
// Tulis kode switch statement di sini
let hasil;

switch (operator) {
    case '+':
        hasil = angka1 + angka2
        
        break;
            case '-':
        hasil = angka1 - angka2
        
        break;
            case '*':
        hasil = angka1 * angka2
        
        break;
            case '/':
        hasil = angka1 / angka2
        
        break;
            case '%':
        hasil = angka1 + angka2
        
        break;

    default:
        console.log('Operator tidak valid')
        break;
}
if(hasil !== undefined){
console.log(`${angka1} ${operator} ${angka2} = ${hasil}`)}
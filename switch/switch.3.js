let grade = "B";
// Tulis kode switch statement di sini
let nilai;
switch (grade) {
    case 'A':
        nilai = 'Sangat Baik'

        break;
    case 'B':
        nilai = 'Baik'

        break;
    case'C':
        nilai = 'Cukup'

        break;
    case 'D':
        nilai = 'Kurang'

        break;
    case 'E':
        nilai = 'Sangat Kurang'

        break;

    default:
        console.log('Grade tidak valid')
        break;
}
if (nilai !== undefined) {
    console.log(`Grade ${grade}: ${nilai}`)
}
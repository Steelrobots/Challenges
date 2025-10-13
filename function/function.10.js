// Tulis function validateAndCalculateGrade di sini
function validateAndCalculateGrade(nama, nilai) {
    let grade;
    let validate;
if (typeof nilai !== 'number' || isNaN(nilai) || nilai < 0 || nilai > 100) {
    validate = 'Tidak Valid - harus 0-100';
    grade = null
  } else {
    validate = 'Valid';
    if (nilai >= 90) grade = 'A';
    else if (nilai >= 80) grade = 'B';
    else if (nilai >= 70) grade = 'C';
    else if (nilai >= 60) grade = 'D';
    else grade = 'E';
  }

  console.log(`
=== Hasil Penilaian ===
Nama  : ${nama}
Nilai : ${nilai} (${validate})
${validate === 'Valid' ? `Grade : ${grade}` : ''}
`);
    return grade
   

}

// Test dengan berbagai nilai
let grade1 = validateAndCalculateGrade("Budi", 85);
let grade2 = validateAndCalculateGrade("Sari", 150); // invalid
let grade3 = validateAndCalculateGrade("Andi", 72);

console.log("Grade Budi: " + grade1);
console.log("Grade Sari: " + grade2);
console.log("Grade Andi: " + grade3);

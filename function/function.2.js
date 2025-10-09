// Tulis function getCurrentTime di sini
function getCurrentTime(){
    let time= new Date()
    let result = time.toLocaleTimeString()
    return result
    
}

// Panggil function dan simpan hasilnya
let waktu = getCurrentTime();
console.log("Waktu sekarang: " + waktu);
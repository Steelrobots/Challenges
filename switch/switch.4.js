let bulan = 2;
// Tulis kode switch statement di sini
let nama;
let hari;

switch (bulan) {
    case 1:
        nama = 'Januari'
        hari = 31

        break;
    case 2:
        nama = 'Februari'
        hari = 28

        break;
        case 3:
        nama = 'Maret'
        hari = 31

        break;
        case 4:
        nama = 'April'
        hari = 30

        break;
        case 5:
        nama = 'Mei'
        hari = 31

        break;
        case 6:
        nama = 'Juni'
        hari = 30

        break;
        case 7:
        nama = 'Juli'
        hari = 31

        break;
        case 8:
        nama = 'Agustus'
        hari = 31

        break;
        case 9:
        nama = 'September'
        hari = 30

        break;
        case 10:
        nama = 'Oktober'
        hari = 31

        break;
        case 11:
        nama = 'November'
        hari = 30

        break;
        case 12:
        nama = 'Desember'
        hari = 31

        break;
    default:
        break;
}
if (nama !== undefined) {
    console.log(`Bulan ke-${bulan} (${nama}) memiliki ${hari} hari`)
} 
let statusCode = 404;
// Tulis kode switch statement di sini

switch (statusCode) {
    case 200:
        console.log('Status 200: OK - Halaman tersedia')

        break;
    case 404:
        console.log('Status 404: Not Found - Halaman tidak ditemukan')

        break;
    case 500:
        console.log('Status 500: Internal Server Error - Silahkan coba lagi nanti')

        break;
    case 403:
        console.log('Status 403: Forbidden - Halaman tidak dapat di akses')

        break;
    default:
        console.log('Unknown Status')

        break;
}
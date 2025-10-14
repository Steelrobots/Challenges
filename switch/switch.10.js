let bahasa = "EN";
// Tulis kode switch statement di sini
switch (bahasa) {
    case 'en': case 'EN':
        console.log(`Language: English
Welcome! How can we help you today?`)
        
        break; 
        case 'id': case 'ID':
        console.log(`Language: Indonesia
Selamat datang! Apa yang bisa kami bantu?`)
        
        break;
        case 'jp': case 'JP':
        console.log(`Language: Japan
ようこそ！本日はどのようなご用件でしょうか?`)
        
        break;
        case 'kr': case 'KR':
        console.log(`Language: Korea
ようこそ！本日はどのようなご用件でしょうか？`)
        
        break;

    default:
        console.log('Language not supported')
        break;
}
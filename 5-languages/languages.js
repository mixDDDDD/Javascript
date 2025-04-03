const lang = navigator.language.slice(0, 2).toLowerCase();

switch (lang) {
    case "en":
        console.log('Good afternoon');
        break;
    case "de":
        console.log('Guten Tag');
        break;
    case "ru":
        console.log('Добрый день');
        break;
    case "fr":
        console.log('Bonjour');
        break;
    default:
        console.log('Hello');
}
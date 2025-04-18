const CHARS = `!#$%&0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw`
function crypt(password) {
    if (!password || !password.length) {
        return NaN;
    }
    const splitedArray = password.split('');
    if (splitedArray.length < 8) {
        return false;
    }

    const middleIndex = Math.floor(splitedArray.length / 2);
    const firstHalf = splitedArray.slice(0, middleIndex).reverse();
    const secondHalf = splitedArray.slice(middleIndex).reverse();
    const length = secondHalf.length;
    
    [firstHalf[1], secondHalf[length - 2]] = [secondHalf[length - 2], firstHalf[1]];
    [secondHalf[1], firstHalf[length - 2]] = [firstHalf[length - 2], secondHalf[1]];

    [firstHalf[0], secondHalf[length - 1]] = [secondHalf[length - 1], firstHalf[0]];
    [secondHalf[0], firstHalf[length - 1]] = [firstHalf[length - 1], secondHalf[0]];

    const encryptedPassword = firstHalf.concat(secondHalf);
    return encryptedPassword.join('');
}

function checkPassword(encryptedPassword, originalPassword) {
    if (!encryptedPassword || !originalPassword) {
        return false;
    }
    return crypt(originalPassword) === encryptedPassword;
}

function getRandomNumber(min = 0, max = 86) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPassword(length = 12) {
    const password = Array.from({ length }, () => CHARS[getRandomNumber(0, CHARS.length)]);
    return password.join('');
}

const password = getRandomPassword();
const encrypted = crypt(password);
const decrypted = crypt(encrypted)

console.log('Пароль:', password);
console.log('Зашифрованный пароль:', encrypted);
console.log('Проверка пароля (обратимость):', decrypted === password);
console.log('Проверка пароля (check):', checkPassword(encrypted, password));
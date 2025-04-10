// Первый вариант, попроще.

function crypto(password) {
  return password.split("").reverse().join("");
}
function check(encrypted, original) {
  return crypto(encrypted) === original;
}

let password = "password";
let encrypted = crypto(password);

console.log("Зашифровано:", encrypted);
console.log("Проверка:", check(encrypted, password));
console.log("Неверный пароль:", check(encrypted, "wrong"));
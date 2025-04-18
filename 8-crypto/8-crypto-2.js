// Второй вариант, более сложный.

function crypto(password) {
  let arr = password.split("");
  if (arr.length > 1) {
    let change = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = change;
  }
  return arr.join("");
}
function check(encrypted, original) {
  return crypto(encrypted) === original;
}

let password = "password";
let encrypted = crypto(password);

console.log("Зашифровано:", encrypted);
console.log("Проверка:", check(encrypted, password));
console.log("Неверный пароль:", check(encrypted, "pasword"));
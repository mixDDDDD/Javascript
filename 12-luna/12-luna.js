// Мой вариант
const card = "4561-1213-4367-2612";

function Luna(cardNumber) {
  const digits = cardNumber.replaceAll('-', '').split('').map(Number);

  const sum = digits
    .reverse()
    .map((digit, index) => {
      if (index % 2 === 1) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      return digit;
    })
    .reduce((acc, curr) => acc + curr, 0);

  return sum % 10 === 0;
}

console.log(Luna(card));

// Вариант наставника
function getRandomNumber(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArray(fn, count) {
    return Array.from({ length: count }, () => fn());
}

function generateCardPart(fn, count) {
    return generateArray(fn, count).join('');
}

function getRandomCardNumber() {
    const cardNumber = generateArray(() => generateCardPart(getRandomNumber, 4), 4);
    return cardNumber.join('-');
}

function cardLunaValidate(card) {
    const cardNumber = card.replaceAll('-', '').split('').map(Number);
    if (cardNumber.some(isNaN)) return false;
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = cardNumber[i];
        if (i % 2 === 0) {
            digit = digit * 2 > 9 ? digit * 2 - 9 : digit * 2;
        }
        sum += digit;
    }
    return sum % 10 === 0;
}

function resultTemplate(card) {
    return `Карта с номером: ${card} получила результат: ${cardLunaValidate(card)}`;
}

const cardArray = Array.from({ length: getRandomNumber(5, 10) }, () => getRandomCardNumber());
const resultArray = cardArray.map(resultTemplate);

for (const result of resultArray) {
    console.log(result);
}

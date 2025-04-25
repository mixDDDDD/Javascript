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

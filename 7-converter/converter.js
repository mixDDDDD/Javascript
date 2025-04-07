function convertCurrency(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        RUB: { USD: 0.012, EUR: 0.011 },
        USD: { RUB: 86.16, EUR: 0.91 },
        EUR: { RUB: 94.29, USD: 1.09 }
    };

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const rate = exchangeRates[fromCurrency][toCurrency];
        return amount * rate;
    } else {
        return null;
    }
}

console.log(convertCurrency(1000, 'RUB', 'USD'));
console.log(convertCurrency(10, 'USD', 'EUR'));
console.log(convertCurrency(200, 'EUR', 'RUB'));
console.log(convertCurrency(500, 'RUB', 'JPY'));

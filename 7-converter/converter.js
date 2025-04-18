function converter(sum, currency, targetCurrency) {
    const USD = 90;
    const EUR = 100;

    currency = currency.toUpperCase();
    targetCurrency = targetCurrency.toUpperCase();

    switch (currency) {
        case 'USD':
            switch (targetCurrency) {
                case 'RUB':
                    return parseFloat((sum * USD).toFixed(2));
                case 'EUR':
                    return parseFloat(((sum * USD) / EUR).toFixed(2));
                default:
                    return null;
            }
        case 'EUR':
            switch (targetCurrency) {
                case 'RUB':
                    return parseFloat((sum * EUR).toFixed(2));
                case 'USD':
                    return parseFloat(((sum * EUR) / USD).toFixed(2));
                default:
                    return null;
            }
        case 'RUB':
            switch (targetCurrency) {
                case 'USD':
                    return parseFloat((sum / USD).toFixed(2));
                case 'EUR':
                    return parseFloat((sum / EUR).toFixed(2));
                default:
                    return null;
            }
        default:
            return null;
    }
}
console.log(converter(1500, 'USD', 'USD'));
console.log(converter(1500, 'RUB', 'USD'));
console.log(converter(1500, 'EUR', 'USD'));


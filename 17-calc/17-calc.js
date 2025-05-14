function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Ошибка: введите оба числа';
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('result').textContent = 'Ошибка: деление на ноль';
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById('result').textContent = `Результат: ${result}`;
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}
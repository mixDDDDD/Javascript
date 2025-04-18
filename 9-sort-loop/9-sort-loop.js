const numbers = Array.from({ length: 10 }, () => {
    const max = 100;
    const min = -100;
    const randomNumber = Math.ceil(Math.random() * (max - min)) + min;
    return randomNumber
});

function sortArray(incomingArray, desc = false) {
    const array = [...incomingArray];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const isExchange = desc ? array[i] < array[j] : array[i] > array[j]
            if (isExchange) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(numbers);
console.log('Отсортированный по возрастанию массив:', sortArray(numbers));
console.log('Отсортированный по убыванию массив:', sortArray(numbers, true));
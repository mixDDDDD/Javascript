const dateArray = [
    '29-02-2024', // true - 2024 високосный год  
    '29-02-2023', // false - 2023 не високосный год  
    '02/29/2024', // true - EN формат записи 29-02-2024  
    '02/29/2023', // false - EN формат записи 29-02-2023  
    '31-09-2024', // false - 31 сентября не бывает  
    '30-09-2024', // true - Тут проблем нет - корректная дата  
    '30d-09m-2024y', // true / false - корректная дата при условии parseInt для валидации числа, при Number - нет  
    '30.01.2024', // true / false - зависит от парсинга разделителей  
];
const length = 30;

function randomNumber(min = 1, max = 35) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const inputDates = Array.from({ length }, () => {
    const separatorList = ['/', '-', '.', ' '];
    const separatorIndex = randomNumber(0, separatorList.length - 1);
    const factor = separatorList[separatorIndex];

    const dateArray = [
        factor === '/' ? randomNumber(0, 15) : randomNumber(),
        factor === '/' ? randomNumber() : randomNumber(0, 15),
        randomNumber(1900, 2050),
    ].map((x) => x.toString().padStart(2, '0'));
    return dateArray.join(factor);
}).concat(Array.from({ length: 10 }, () => [randomNumber(28, 32), '02', randomNumber(1900, 2050)].join('-')));

function getDates(array, fn) {
    return array
    .map(stringToArray)
    .filter(fn)
    .sort(sortDatePattern)
    .map(formatDate);
}

function formatDate(array) {
    return array.map(String).map((x, i) => (i === 2 ? x.padStart(4, '0') : x.padStart(2, '0'))).join('-');
}

function sortDatePattern(a, b) {
    let day, month, year;

    [day, month, year] = a;
    const dt1 = new Date(year, month - 1, day).getTime();

    [day, month, year] = b;
    const dt2 = new Date(year, month - 1, day).getTime();

    return dt1 - dt2;
}

function stringToArray(str) {
    let day, month, year;
    if (str.includes('/')) {
        [month, day, year] = str.split('/').map(x => parseInt(x));
    } else {
        [day, month, year] = str.split(/\W/g).map(x => parseInt(x));
    }

    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }
    return [day, month, year];
}

function checkCorrectDate(array) {
    if (array === null) {
        return false;
    }

    const [day, month, year] = array

    const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    // check month
    if (month < 1 || month > 12 || year <= 0) {
        return false;
    }

    // check day
    if (day < 1 || day > 31) {
        return false;
    }

    if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
        return false;
    }

    // check February for correct day and leap year
    if (month === 2 && ((day === 29 && !isLeapYear) || day > 29)) {
        return false;
    }
    return true;
}

console.log('---------------- DATE ARRAY -------------');
console.log(dateArray);
let res = getDates(dateArray, checkCorrectDate);
console.log(res);

console.log('---------------- INPUT DATES -------------');
console.log(inputDates);
res = getDates(inputDates, checkCorrectDate);
console.log(res);
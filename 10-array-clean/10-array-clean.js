const arr = [1, 4, 8, 7, -2, 25, 10, 3];

function customFilter(arr, removeFn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!removeFn(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const remove = num => num > 5;
const result = customFilter(arr, remove);
console.log(result);
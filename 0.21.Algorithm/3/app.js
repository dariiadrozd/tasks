// Вычислите сумму массива целых(положительные) чисел 
// статичного массива используя рекурсию

const arr = [-0.21, 0, 2, 3, -4, 5.4, 6, -7];

function isValid(arr) {
    let res = arr.filter(function (el) {
        if (el > 0 && el == Math.round(el)) {
            return true;
        } else {
            return false;
        }
    })
    return res;
}

function doSum(arr) {
    if (arr.length == 1) {
        return arr[0];
    } else {
        return arr[0] + doSum(arr.slice(1));
    }
}

const valid = isValid(arr); //[2,3,6]
const result = doSum(valid);
console.log(result);
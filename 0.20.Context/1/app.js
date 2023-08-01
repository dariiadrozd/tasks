// На входе число n. Напишите функцию, которая переворачивает число.

const num = '150';

function doReverse(str) {
    return str.split('').reverse().join("");
}

let result = doReverse(num);
console.log(result);
// На входе объект. Ключи и значения - 
// автоинкремент (генерируется автоматически от 1 до n). 
// Написать функцию на поиск в объекте только четных ключей.

const n = 5;
const obj = {}

function doObject(n) {
    for (let i = 0; i < n; i++) {
        obj[i] = i;
    }
    return obj;
}

function findValue(obj) {
    const value = Object.keys(obj);
    let res = value.filter(function (el) {
        if (el % 2 == 0) return true;
    });
    return res;
}

let result = doObject(n);
let check = findValue(result)
console.log(check);

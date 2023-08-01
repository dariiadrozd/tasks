// На входе статичный объект. 
// Необходимо числовые значения удвоить на выходе.

const obj = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
    num5: 5,
    num6: 6,
}

const arr = [];
for (let key in obj) {
    if (!isNaN(obj[key])) {
        arr.push(obj[key] * 2)
    }
}

console.log(arr);
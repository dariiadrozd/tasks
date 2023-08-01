// На входе статичный объект. 
// Необходимо сформировать массив из всех нечетных
// ключей объекта



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
    if (key % 2 != 0) {
        arr.push(key)
    }
}
console.log(arr);

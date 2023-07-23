// На входе n – количество элементов массива. 
// Далее производится заполнение массива с клавиатуры. 
// Выведите произведение всех элементов массива. 
// Проверки на ввод только чисел.
//  Использовать forEach, reduce

const n = prompt('кол-во элементов');
let arr = [];

for (let i = 0; i < n; i++) {
    let element = prompt('что ты хочешь ввести хозяин');
    if (!isNaN(element)) {
        arr.push(element)
    }
}

let str = 1
arr.forEach(function (el) {
    if (!isNaN(el)) {
        str *= el
    }
});

console.log(str);

// const num = arr.reduce(function (sum, el) {
//     if (!isNaN(el)) {
//        return sum * el
//     }else{
//         return "ошибка ввода"
//     }
// }, 1);

// console.log(num);
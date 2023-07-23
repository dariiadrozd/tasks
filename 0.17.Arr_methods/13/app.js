// На входе n – количество элементов массива. 
// Далее производится заполнениемассива arr с клавиатуры. 
// Также в памяти есть статичная переменная со значением javascript. 
// Необходимо создать новый массив из отфильтрованных значений, где строка массива arr включают значение переменной javascript. 
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = prompt('введите кол-во элементов массива');
let arr = [];
for (let i = 0; i < n; i++) {
    let el = prompt('введите');
    if (!isNaN(el)) {
        arr.push(el);
    }
}

let javascript = `javascript`;
// let result = [];

// arr.forEach(function (el) {
//     if (el.includes(javascript)) {
//         result.push(el);
//     }
// })

// console.log(result);

let arr_2 = arr.filter(function (el) {
    return el.includes(javascript) ? true : false
})
console.log(arr_2);
// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const num = +prompt();

function doArray(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        let str = prompt("введите эл массива")

        if (isNaN(str)) {
            arr.push(str) 
        }
    }
    return arr
}

function findMax(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i].lenght > max.lenght) {
            max = arr[i];
        }
    }
    return max
}

const arr_1 = doArray(num);
const result = findMax(arr_1);
console.log(result);
// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. 
// Необходимо создать новый массив из элементов, каждое значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = prompt('ввежите кол-во элементов массива');
let arr = [];
for (let i = 0; i < n; i++) {
    let element = prompt('введите значение массива');
    if (!isNaN) {
        arr.push(el)
    }
}

let new_arr = [];

arr.forEach(function (el) {
    new_arr.push('#' + el)
})

console.log(new_arr);
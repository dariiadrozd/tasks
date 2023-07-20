// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов.
// Далее необходимо сравнить массивы. Если они идентичны,
// то вывести булевое true, в противном случае false

const n = 10;

let arr = [];
let arr_2 = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt("ввод"));
    if (arr.length == 5) {
        break;
    }
}
console.log(arr);

for (let i = 0; i < n; i++) {
    arr_2.push(prompt("ввод"));
    if (arr_2.length == 5) {
        break;
    }
}
console.log(arr_2);

if (arr == arr_2) {
    console.log(true);
} else {
    console.log(false);
}

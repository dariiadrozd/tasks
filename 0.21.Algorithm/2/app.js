// Реализуйте функцию searchBinary, которая принимает 2 параметра: 
// значение и массив [1, 2, 3, 4, 5]. 
// Функция возвращает индекс, где значение встречается в массиве, если найдено. 
// Если значение не найдено, возвращается сообщение об ошибке.

const n = 9;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let count = 0;

function searchBinary(n, arr) {
    let start = 0;
    let end = arr.length;
    for (let i = start; i < end; i++) {
        let average = Math.floor((start + end) / 2);
        count++;
        if (arr[average] == n) {
            console.log("вы угадали");
            break
        } else if (n > arr[average]) {
            start = average;
        } else if (n < arr[average]) {
            end = average;
        }
    }
}

const result = searchBinary(n, arr);
console.log(count);
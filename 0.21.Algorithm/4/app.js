// Пользователь вводит n–порядковыи ̆номер числа из ряда Фибоначчи. 
// Реализуйте функцию на поиск числа n 
// в данной последовательности используя рекурсию
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// 5 -> 5
// 10 -> 55
// 7 -> 13

const n = 7;

function FindNum(n) {
    if (n <= 2) {
        return 1;
    } else {
        return FindNum(n - 1) + FindNum(n - 2);
    }
}


const result = FindNum(n);
console.log(result);
debugger 
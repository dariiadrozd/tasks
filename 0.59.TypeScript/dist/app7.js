//Напишите программу, которая находит факториал заданного числа num и выводит результат в консоль.
function factorial(num) {
    if (num < 0) {
        return "Факториал отрицательного числа";
    }
    else if (num === 0 || num === 1) {
        return 1;
    }
    else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}
const num = 8;
const result = factorial(num);
console.log(`Факториал числа ${num} равен: ${result}`);

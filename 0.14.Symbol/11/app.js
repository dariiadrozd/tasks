// Напишите скрипт,которыйбудетнаходитьфакториалчисла.Факториал–это
// произведение всех целых чисел, меньше данного, и его самого.
// 5 -> 120 (1*2*3*4*5)

function factorial(n) {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
}
var userNum = +prompt('Введите число для вычисления факториала');
alert(factorial(userNum));


//Напишите программу, которая проверяет, является ли заданное число num четным или нечетным.
const num = +prompt("введите значение");
if (num % 2 == 0) {
    console.log('четное');
}
else {
    console.log('нечетное');
}
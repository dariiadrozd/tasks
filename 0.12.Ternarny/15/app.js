// Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в результате получилось выражение: “I’m хх". Проверки на ввод только чисел. Проверки на ввод чисел до 10. Если первое число – 0, то опустить его
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let str = a + b;
if (isNaN(a, b < 10)) {
    console.log('ошибка ввода');
} else {
    console.log(str = "I'm", a + b);
}
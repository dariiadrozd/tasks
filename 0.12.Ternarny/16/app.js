// Пользователь вводит строку. Необходимо сделать проверку, что это не число и вывести длину строки
let a = prompt("введите число");
if (isNaN(a)) {
    console.log("ошибка ввода");
} else {
    console.log(a.length);
}
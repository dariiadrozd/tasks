// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false. Добавить проверки для строк. Удалить лишние пробелы

let str = prompt("Введите строку");

str = str.trim();

if (str === "hschool") {
    console.log(true);
} else {
    console.log(false);
}
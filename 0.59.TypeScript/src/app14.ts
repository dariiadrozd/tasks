//Напишите программу, которая удаляет все пробелы из заданной строки и выводит результат.

let inpStr: string = "привет как твои дела";
let stringWithoutSpaces: string = inpStr.replace(/\s/g, '');

console.log(`Исходная строка: ${inpStr}`);
console.log(`Результат: ${stringWithoutSpaces}`);
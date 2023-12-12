//Напишите программу, которая принимает строку и возвращает новую строку, в которой все символы уникальны (не повторяются). Например, для строки "hello" результатом должна быть строка "helo".
function removeDuplicates(inputString) {
    const uniqueChars = new Set();
    let resultString = "";
    for (const char of inputString) {
        if (!uniqueChars.has(char)) {
            uniqueChars.add(char);
            resultString += char;
        }
    }
    return resultString;
}
const inputString = "hello";
const resultt = removeDuplicates(inputString);
console.log(`Исходная строка: ${inputString}`);
console.log(`Результат: ${resultt}`);

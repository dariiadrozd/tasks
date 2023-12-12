//Напишите программу, которая принимает строку и возвращает новую строку, в которой все символы уникальны (не повторяются). Например, для строки "hello" результатом должна быть строка "helo".

function removeDuplicates(inputString: string): string {
    const uniqueChars: Set<string> = new Set();
    let resultString: string = "";

    for (const char of inputString) {
        if (!uniqueChars.has(char)) {
            uniqueChars.add(char);
            resultString += char;
        }
    }

    return resultString;
}

const inputString: string = "hello";
const resultt: string = removeDuplicates(inputString);

console.log(`Исходная строка: ${inputString}`);
console.log(`Результат: ${resultt}`);
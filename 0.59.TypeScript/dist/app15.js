// Напишите программу, которая принимает строку и возвращает новую строку, в которой каждое слово заменено на последнюю букву этого слова, а все остальные символы остаются без изменений.
//"Hello World" -> "o d“
function replaceWordsWithLastLetter(inputString) {
    const words = inputString.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const lastLetter = word.charAt(word.length - 1);
        words[i] = lastLetter;
    }
    return words.join('');
}
const inpuString = "Hello World";
const resultString = replaceWordsWithLastLetter(inpuString);
console.log(`Исходная строка: ${inpuString}`);
console.log(`Результат: ${resultString}`);

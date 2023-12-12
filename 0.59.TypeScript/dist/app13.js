// Создайте переменную sentence и присвойте ей строковое значение предложения. Напишите программу, которая преобразует первую букву каждого слова в предложении в верхний регистр. Например, для предложения "hello world" результатом должна быть строка "Hello World".
let sentence = "hello world";
let words = sentence.split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
const res = words.join(' ');
console.log(`Исходное предложение: ${sentence}`);
console.log(`Результат: ${res}`);

//Напишите программу, которая находит сумму всех чисел от 1 до 100 и выводит результат в консоль.


let sum: number = +prompt("Введите значение для сложения");
let totalSum: number = 0;

for (let i = 1; i <= 100; i++) {
  totalSum += i;
}

sum += totalSum;

console.log(`Сумма чисел от 1 до 100: ${totalSum}`);
console.log(`Итоговая сумма с введенным значением: ${sum}`);
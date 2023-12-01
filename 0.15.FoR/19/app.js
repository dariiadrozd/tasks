// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и заполяет массив. Далее необходимо создать массив только из чисел. Если длина массива равна 0, то вывести ‘Массив пуст’. filter
const inputArray = [userInput1, userInput2, userInput3, userInput4, userInput5];
const numericArray = inputArray.filter(value => !isNaN(value) && value !== null && value !== '');

if (numericArray.length === 0) {
  console.log('Массив пуст');
} else {
  console.log('Массив чисел:', numericArray);
}
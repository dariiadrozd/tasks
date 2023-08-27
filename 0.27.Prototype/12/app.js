// Реализуйте функцию, которая будет считать количество своих вызовов

const btn = document.querySelector('button');
const result = document.querySelector('.result');

function callCounter() { // функция которая создает счетчик вызовов
    let count = 0; // начальное значение счетчика устанавливается на 0

    return function () {
        count++;
        return count;
    };
}

const countCalls = callCounter();

btn.addEventListener('click', function () {
    const callCounter = countCalls();
    result.textContent = callCounter;
});
// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для формирования массива
function generateArray(n) {
    const array = [];

    for (let i = 0; i < n; i++) {
        const value = getRandomNumber(1, 200); // Генерируем случайное число от 1 до 200
        array.push(value);
    }

    return array;
}

// Функция для валидации элементов массива
function validateArray(array) {
    return array.every(element => typeof element === 'number' && element > 10 && element < 100);
}

// Основная функция
function main(n) {
    const generatedArray = generateArray(n);

    if (!validateArray(generatedArray)) {
        console.log('Массив содержит некорректные элементы');
        return;
    }

    const newArray = generatedArray.filter(element => element > 10 && element < 100);

    console.log('Исходный массив:', generatedArray);
    console.log('Новый массив с элементами от 10 до 100:', newArray);
}

// Вызываем основную функцию с заданным количеством элементов
main(10); 

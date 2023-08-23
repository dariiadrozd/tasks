// На вход подается число. Необходимо каждое значение возвести в степень индекса и вычислить сумму.
// 12345 = 10+21+32+43+54

function calculatePowerSum(number) {
    if (typeof number !== 'number' || number <= 0) {
        throw new Error('Input should be a positive number');
    }
    const digits = number.toString().split('').map(Number); // Разбиваем число на цифры
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += digits[i] ** (i + 1); // Возводим цифру в степень индекса и добавляем к сумме
    }

    return sum;
}
const inputNumber = 12345;

try {
    const result = calculatePowerSum(inputNumber);
    console.log(`Sum of powers for ${inputNumber} is ${result}`);
} catch (error) {
    console.error(error.message);
}
// На вход программе подается число в двоичной системе счисления.
//  Необходимо преобразовать его в десятичную систему счисления

// Преобразовать число из двоичной системы счисления в десятичную можно следующим образом: 
// каждый разряд числа необходимо умножить на 2n, где n - номер разряда, начиная с 0.
// Затем суммировать полученные значения.

const binaryInp = document.querySelector('.binaryInp');
const btn = document.querySelector('button');
const res = document.querySelector('.result');

btn.addEventListener('click', function () {
    const binary = binaryInp.value;
    const digit = parseInt(binary, 2);
    // используем parseInt(binary, 2) 
    // для преобразования бинарного числа в десятичное число. 
    // Второй аргумент 2 указывает, что введенное число в двоичной системе.
    res.textContent = `десятичная система счисления: ${digit};`
});
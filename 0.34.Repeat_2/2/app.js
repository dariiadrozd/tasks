// Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные

const btn = document.querySelector('button');
const array = [];

btn.addEventListener('click', () => {
    const inp = document.querySelector('input').value;
    const arr = document.querySelector('.arr');
    const chet = document.querySelector('.chet');
    const nechet = document.querySelector('.nechet')

  
    array.push(inp);
    arr.innerHTML = array;
    inp = '';

    const chetArray = [];
    const nechetArray = [];

    array.forEach((el) => el % 2 == 0 ? chetArray.push(el) : nechetArray.push(el));
    chet.innerHTML = `четные значения ${chetArray}`;
    nechet.innerHTML = `нечетные значения ${nechetArray}`
})
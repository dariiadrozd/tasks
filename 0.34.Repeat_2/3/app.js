// Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]

const btn = document.querySelector('button');
const array = [];

btn.addEventListener('click', () => {
    const arr = document.querySelector('.arr');
    const uniq = document.querySelector('.uniq');
    const inp = document.querySelector('input');

    array.push(inp.value);
    arr.innerHTML = array;
    inp.value = '';

    const uniqArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqArr.includes(array[i])) {
            uniqArr.push(array[i]);
        }
    }
    uniq.innerHTML = uniqArr;
})
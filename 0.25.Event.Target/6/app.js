// Вы вводите строку. Проверить является ли это слово палиндром. 
// Добавить проверки

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const res = document.querySelector('h1')

btn.addEventListener('click', function () {
    const inpPol = inp.value.toLowerCase();
    const reversInp = inpPol.split("").reverse().join("");


    if (inpPol === reversInp && inpPol !== '') {
        res.textContent = 'это палиндром';
    } else if (inpPol === '') {
        res.textContent = 'введите слово';
    } else {
        res.textContent = 'это не палиндром';
    }
});
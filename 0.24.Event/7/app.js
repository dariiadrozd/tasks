// Записать в результат удвоенное значение инпута. Добавить проверки

const btn = document.querySelector('button');
const dv = document.querySelector('div')

btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    const inputValue = inp.value;
    //  эта строка берет текст, который пользователь ввел в текстовое поле, 
    // и сохраняет его в переменной inputValue, 
    // чтобы вы могли дальше работать с этим значением.
    if (!isNaN(inputValue)) {
        const res = inputValue * 2;
        dv.textContent = `result ${res}`
    } else {
        dv.textContent = "вы ввели неправильное число"
    }
})
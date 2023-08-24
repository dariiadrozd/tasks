// По условию задачи даны инпут и кнопка. 
// Пользователь вводит в инпут значения и по нажатию на кнопку
//  формирует массив. Необходимо вывести среднее значение этого массива

const btn = document.querySelector("button");

const arr = [];
function isValid() {
    if (!inp) throw new Error('пустой ввод')
}
btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector("input");
        const div = document.querySelector(".array");
        const res = document.querySelector('.result');

        arr.push(inp.value);
        div.innerHTML = arr;
        inp.value = '';
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }
        res.innerHTML = sum / arr.length;
    } catch (error) {
        alert(error.message)
    }
});

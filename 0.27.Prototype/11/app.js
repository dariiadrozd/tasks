// Напишите функцию,принимающую в качестве параметра статичный объект. 
// Функция возвращает новый объект, где значения – исключительно числа первоначального объекта. IIFE


const obj = {
    1: 18,
    2: 'Darya',
    3: 37,
    4: 'Drozd',
    5: 76
}

const btn = document.querySelector('button');
const res = document.querySelector('.result');

btn.addEventListener('click', function () {
 function NumberFilter(object) {
        this.filterObj = {};
        for (key in object) {
            if (typeof object[key] === 'number') {
                this.filterObj[key] = object[key];
            }
        }
    }
    const NumberRes = new NumberFilter(obj);
    const filterObject = NumberRes.filterObj;

    res.textContent = JSON.stringify(filterObject);
})



// На входе объект. Ключи и значения - автоинкремент 
// (генерируется автоматически от 1 до n). 
// Необходимо отобразить на экране объект 
// (помните, что окно браузера не воспринимает объекты как тип данных JavaScript. 
// Для отображения неоходимо преобразовать строку в ...)

const objectjs = document.querySelector('.object');

const obj = {}; 

for (let i = 1; i < 5; i++) {
    obj[i] = `объект${i}`;
}

const str = JSON.stringify(obj);
objectjs.textContent = str;



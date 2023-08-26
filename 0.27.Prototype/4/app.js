// По условию задачи даны инпут и кнопка. 
// Необходимо преобразовать строку в CamelCase (примерСтрокиВCamelCase )

const btn = document.querySelector('button');


btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    const res = document.querySelector('div')

    const words = inp.value.split(' ');
    const arrCamel = [];

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            arrCamel.push(words[i].toLowerCase());
        } else {
            const result = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
            arrCamel.push(result);
        }
    }

    const camelString = arrCamel.join('');
    res.innerHTML = camelString;
})
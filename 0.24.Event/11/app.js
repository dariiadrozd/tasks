// По нажатию на кнопку поменять местами значения 2 инпутов

const btn = document.querySelector('button');
const inpFirst = document.querySelector('#inpFirst');
const inpSecond = document.querySelector('#inpSecond');
// Решетка (#) используется для обращения к элементам по идентификатору 


btn.addEventListener('click',function(){
    [inpFirst.value, inpSecond.value] = [inpSecond.value, inpFirst.value]
})

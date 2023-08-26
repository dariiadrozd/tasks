// По условию задачи даны 2 инпута и кнопка. 
// Необходимо вернуть true, если часть символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector('button');
const res = document.querySelector('div')

btn.addEventListener('click', function(){
    const firstInp = document.querySelector('.firstinp');
    const secondInp = document.querySelector('.secondinp');

    const firstValue = firstInp.value;
    const secondValue = secondInp.value;

    let flag = false;

    for(let i=0;i<firstValue.length; i++){
        if(secondValue.includes(firstValue[i])){
            flag = true;
            break;
        }
    }
res.textContent = flag;
})
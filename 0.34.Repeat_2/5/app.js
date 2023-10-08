// У вас есть 3 инпута. Необходимо вывести в результат конкатенацию всех инпутов

document.querySelector('button').addEventListener('click', ()=>{
    const inp1 = document.querySelector('.inp1');
    const inp2 = document.querySelector('.inp2');
    const inp3 = document.querySelector('.inp3');
    const div = document.querySelector('div');

    div.innerHTML = inp1.value + inp2.value + inp3.value
})
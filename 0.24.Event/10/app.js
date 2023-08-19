// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в инпут. 
// После нажатия на заблокировать данное действие запрещается, тем самым выключая 
// возможность редактирования значения инпута

const btn = document.querySelector('button')
const inp = document.querySelector('input')
const btn2 = document.querySelector('button')

btn.addEventListener('click', function () {
inp.disabled = false;
})

// inp.disabled - это способ сделать поле ввода (инпут) на веб-странице 
// недоступным для редактирования. Если значение inp.disabled установлено в true, 
// то пользователь не сможет вводить или изменять текст в этом поле. А если установлено 
// в false, то поле ввода будет доступно для внесения изменений.

btn2.addEventListener('click',function(){
    inp.disabled = true;
})
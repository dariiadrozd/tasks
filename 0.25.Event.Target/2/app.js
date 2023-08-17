// По наведению на кнопку вывести сообщение «Hi». 
// Когда мышка выходит за границы кнопки сновка скрывать.

const btn = document.querySelector('button');
btn.addEventListener('mouseover',function () {
    const div = document.querySelector('div');
    div.innerHTML = 'hi'
})


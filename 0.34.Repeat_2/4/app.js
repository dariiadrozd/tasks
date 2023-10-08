// Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

document.querySelector('button').addEventListener('click', () => {
    const inp = document.querySelector('input');
    const div = document.querySelector('div');

    if (/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/gm.test(inp.value)) {
        div.innerHTML = 'совпадает'
    } else {
        div.innerHTML = 'не совпадает'
    }
})
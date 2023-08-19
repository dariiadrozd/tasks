// У вас есть кнопка. После каждого нажатия менять background.

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
})
function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
}
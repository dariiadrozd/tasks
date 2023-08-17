
const btn = document.querySelector('button');

function isValid(inp) {
    if (!inp) throw new Error("пустое")
}

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        isValid(inp.value)
        const div = document.querySelector('container');
        const reverse = inp.value.split('').reverse().join('')
        if (inp.value === reverse) {
            div.innerHTML = 'palindrom';
        } else {
            div.innerHTML = 'error'
        }
    }catch (error) {
        alert(error.message)
    }
})

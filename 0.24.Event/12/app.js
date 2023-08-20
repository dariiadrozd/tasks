// Вывести в строчку все вводимые значения через инпут в виде массива. 
// Добавить проверку, что поле не пустое

const btn = document.querySelector('button');
let arr = [];

function isValid() {
    if (!inp) throw new Error('поле ввода пустое')
}

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        isValid(inp.value) 
        const paragraph = document.querySelector('p');

        arr.push(inp.value); //???? значение input(value) пушится в массив, 
        // если без этой строки будет пушится  <input type="text">
        paragraph.innerHTML = arr;
        inp.value = "";  //?? чтобы когда ты нажимал клик тебе не нужно было удалять значение, 
        // а потом писать заново(значения сами пропадают)
    } catch (error) {
        alert(error.message)
    }
});

 
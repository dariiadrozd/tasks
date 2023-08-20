// *Дана таблица c 1 колонкой. Под таблицей сделайте форму (инпут и кнопка), 
// с помощью которой можно будет добавить нового значение в таблицу

const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const table = document.querySelector('.table');

btn.addEventListener('click', function () {
    const inputValue = inp.value; // Это то, что пользователь ввёл в инпут.

    if (inputValue !== '') {  // не пустое ли это значение,

        // Если это не пустая строка:
        // Вы создаете новую строку (<tr>) 
        // для таблицы и новую ячейку (<td>) внутри этой строки.

        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        newCell.textContent = inputValue; // добавляем текстовое содержимое в новую ячейку
        newRow.appendChild(newCell); // добавляем новую ячейку в новую строку
        table.appendChild(newRow); // добавляем новую строку в тело таблицы

        inp.value = ''; // очищаем поле ввода, устанавливая его значение в пустую строку
    }
});
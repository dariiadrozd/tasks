// Необходимо отобразить числовой инпут и кнопку. 
// После нажатия на кнопку необходимо получить значение из инпута. 
// Проверить, что это число > 0. Если проверка true, то вывести в Результат ряд Фибоначчи. 


const btn = document.querySelector('button');
btn.addEventListener("click", function () {
    try {
        const inp = document.querySelector("input");
        if(!inp.value) throw new Error("пустая строка ввода")
        const cont = document.querySelector(".container");
        const arr = [0, 1];
        for (let i = 2; i < +inp.value; i++) {
            arr.push(arr[i - 1] + arr[i - 2])
        }
        cont.innerHTML = arr
    } catch (error) {
        alert(error.message);
    }

})
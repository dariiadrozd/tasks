// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и заполяет массив. Далее необходимо создать массив только из чисел. Если длина массива равна 0, то вывести ‘Массив пуст’. filter
let a = +prompt("введите 1-е значение");
let b = +prompt("введите 2-е значение");
let c = +prompt("введите 3-е значение");
let d = +prompt("введите 4-е значение");
let e = +prompt("введите 5-е значение");

const massiv = [a, b, c, d, e];

const result = massiv.filter(function(el){
    if(el.length === 0){
        return("Массив пуст");
    }else{
        return("Массив чисел:", el);
    }
})

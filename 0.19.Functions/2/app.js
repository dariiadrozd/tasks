// Напишите функцию, которая принимает строку состоящую из нескольких слов. 
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно, в верхний
// happy new year -> happy NEW year

let word = "happy new year".split(' ');
function showResult(word) {
    let result = word.map(function (el, index) {
        if (index % 2 === 0) {
            return el.toLowerCase();
        } else {
            return el.toUpperCase();
        }
    })

    return result.join(' ')

}
let res = showResult(word);
console.log(res);



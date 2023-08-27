// По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE. 
// предложение VAPORWAVE преобразует все буквы в верхний регистр и 
// добавляет 2 пробела между каждой буквой (или специальным символом) 
// Why isn't my code working?–W H Y I S N ' T M Y C O D E W O R K I N G ?


const btn = document.querySelector('button');
const inp = document.querySelector('.vaporwave');
const res = document.querySelector('.result');

btn.addEventListener('click', function(){
    const sentence = inp.value;
    const vaporwaveSentence = convertToVaporwave(sentence);
    res.textContent = vaporwaveSentence;
});

function convertToVaporwave(sentence) {
    return sentence.split('').map(function(el) {
        if(el !== " "){
            return el.toUpperCase() + "  ";
        }else{
            return '  ';
        }
    }).join('')
}
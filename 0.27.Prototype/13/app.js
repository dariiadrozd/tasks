// Напишите алгоритм для нахождения факториала числа

// function factorial(n, result){
//     result = result || 1;
//     if(!n){
//         return result;
//     }else{
//         return factorial(n-1, result*n);
//     }
// }

const btn = document.querySelector('button');
const inp = document.querySelector('.factorial');
const result = document.querySelector('.result');

function factorial(n, result) {
    result = result || 1;
    if (!n) {
        return result;
    } else {
        return factorial(n - 1, result * n);
    }
};

btn.addEventListener('click',function(){
const inpValue = +inp.value;
const resFactorial = factorial(inpValue);
result.textContent = `Факториал числа ${inpValue} равен ${resFactorial}`
})



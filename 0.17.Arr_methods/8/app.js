// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры.
//  Если все элементы массива – числа, то вывести логическое true, в противном случае false. Every, forEach 
let count = 0;
const arr =[1,2,3];

arr.forEach(function (el) {
    if(!isNaN(el)){
        count++
    }
})

if (count === arr.length){
    console.log(true);
}else{
    console.log(false);
}
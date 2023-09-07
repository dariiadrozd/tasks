// На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Необходимо создать функцию возвращающую новый массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = 5;


function doArr(n){
  const arr = [];

  for(let i = 0; i<n;i++){
  arr.push(prompt('введите элемент'));
  }
  return arr
}

const result = doArr(n);

function doNewArray(result){
  const new_arr = result.map((el)=> '#'+ el);
  return new_arr;
}

const res = doNewArray(result);
console.log(res);
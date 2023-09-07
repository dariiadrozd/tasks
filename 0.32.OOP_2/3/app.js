// Написать функцию на подсчет количества пар ключ значение в объекте. 
// Добавить проверки

const obj = {
  name: 'Darya',
  surname: 'Drozd',
  age: 18
}

function doPar(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}

const result = doPar(obj);
console.log(result);

const value = Object.values(obj);
console.log(value);
console.log(value.length);
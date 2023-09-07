// На входе статичный объект. Написать функцию на формирование массива значений данного объекта

const obj = {
  name: 'Darya',
  surname: 'Drozd',
  age: 18
}

function doPar(obj) {
  let count = 0;
  const value = Object.values(obj);
  console.log(value);
  console.log(value.length);
}

const result = doPar(obj);
console.log(result);

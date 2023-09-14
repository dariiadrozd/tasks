const arr = [1, 2, 3, 4, 5,];

const num = arr.reduce(function (el, number) {
  return el * number;
},1);

console.log((num));

// РеализуйтеклассMathСalculation.Внегопередаетсячислоn–количество элементов массива. На основании числа формируется динамический массив из n элементов внутри класса. Создать функцию для подсчета всех четных чисел массива. Добавить проверки на ввод

class MathСalculation {
  constructor(n) {
    this.n = n;
  }
  count() {
    const arr = []
    for (let i = 0; i < this.n; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    const newArr = arr.filter((el) => el % 2 === 0);
    return `${newArr}, колличество четных елементов = ${newArr.length}`
  }
}

const mathСalculation = new MathСalculation(10);
const result = mathСalculation.count();
console.log(result);

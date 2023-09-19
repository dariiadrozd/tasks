class MathCalculation {
  constructor(n) {
    if (typeof n !== 'number' || n <= 0) {
      throw new Error('Введите положительное число');
    }
    
    this.array = new Array(n).fill(0).map(() => Math.floor(Math.random() * 100)); // Создаем массив из n элементов со случайными числами
  }

  countEvenNumbers() {
    return this.array.filter(number => number % 2 === 0).length;
  }
}

try {
  const n = parseInt(prompt('Введите количество элементов массива:'));
  const mathCalc = new MathCalculation(n);
  const evenCount = mathCalc.countEvenNumbers();
  console.log(`Количество четных чисел: ${evenCount}`);
} catch (error) {
  console.error(error.message);
}

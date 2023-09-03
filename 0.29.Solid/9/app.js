// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, 
// преобразующий все числа 10 системы счисления в 2
class Сonversion {
  DecimalNumber(input1) {
    const binaryNumber = parseInt(input1).toString(2);
    return binaryNumber;
  }
}
const conversion = new Сonversion();

const btn = document.querySelector('button');
const input = document.querySelector('input');
const resultDiv = document.querySelector('div');

btn.addEventListener('click', function () {
  const input1 = input.value;
  const result = conversion.DecimalNumber(input1);
  resultDiv.textContent = `${result}`;
});

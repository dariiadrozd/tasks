// Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, 
// преобразующий все числа 2 системы счисления в 10

class Conversion {
  doBinaryNumber() {
    const btn = document.querySelector('button');
    const div = document.querySelector('div');
    btn.addEventListener('click', function () {
      const binaryInput = document.querySelector('input').value;
      const num = parseInt(binaryInput, 2);
      div.textContent = `${num}`;
    });
  }
}

const conversion = new Conversion();
conversion.doBinaryNumber();
// Дополнить класс Validator. Добавить метод isDate для проверки на дату.


class Validator {
  isValid(str) {
    if (typeof str !== 'string') {
      throw new Error('Вы передали не строку');
    }
  }

  isDate(str) {
    try {
      const date = /^\d{4}-\d{2}-\d{2}$/; 
      return date.test(str); 
    } catch (error) {
      return false;
    }
  }
}

const validator = new Validator();
const resultDate = validator.isDate('2023-08-28');
console.log(resultDate);
// РеализуйтеклассValidator.УнегобудетметодisEmailпараметромпринимает строку и проверяет, 
// является ли она корректным емейлом или нет. Если является - возвращает true, 
// если не является - то false.

class Validator {
  isValid(str) {
    if (typeof str !== 'string') {
      throw new Error('Вы передали не строку');
    }
  }


  isEmail(str) {
    try {
      this.isValid(str);

      const email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return email.test(str); 
      // Метод test() - это метод регулярного выражения в JavaScript, который проверяет, 
      // соответствует ли переданная строка шаблону регулярного выражения.
    } catch (error) {
      return false; 
    }
  }
}

const validator = new Validator();
const resultEmail = validator.isEmail('drozd.d.rus@gmail.com');
console.log(resultEmail);
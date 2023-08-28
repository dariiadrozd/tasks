// Дополнить класс Validator. Добавить метод isURL для проверки на url.

class Validator {
  isValid(str) {
    if (typeof str !== 'string') {
      throw new Error('Вы передали не строку')
    }
  }

isURL(str){
  try{
    const url = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return url.test(str);
  }catch(error){
    return false;
  }
}
}

const validator = new Validator();
const resultUrl = validator.isURL('https://www.myrusakov.ru/js-validate-url-part-1.html')
console.log(resultUrl);





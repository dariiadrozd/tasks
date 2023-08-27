// Реализуйте класс WordString, который будет иметь следующие методы:
// метод reverseString, переворачивающий строку, метод upperFirst, возвращающий строку, 
// где первая буква заглавная и метод upperEvery, который делает заглавной первую букву каждого слова этой строки.

class WordString {
  isValid() {
    if (!isNaN(str)) throw new Error('вы передали число')ж
  }
  reverseString(str) {
    try {
      this.isValid(str)
      let reverse = str.split('').reverse().join('');
      return reverse;
    } catch (error) {
      return error.message
    }
  }

  upperFirst(str) {
    try {
      let upper = str[0].toUpperCase() + str.slice(1);
      return upper;
    } catch (error) {
      return error.message;
    }
  }
  upperEvery(str) {
    try {
      const strAll = str.split(' ');
      let newStr = '';
      for (let i = 0; i < str.length; i++) {
        newStr += strAll[i][0].toUpperCase() = strAll[i].slice(1) + ' ';
      }
      return newStr;
    } catch (error) {
      return error.message;
    }
  }
}
const wordString = new WordString();
const reverse = wordString.reverseString('test')
console.log(reverse);
const upper = wordString.upperFirst('test');
console.log(upper);
const upperAll = wordString.upperEvery('hello world')
console.log(upperAll);

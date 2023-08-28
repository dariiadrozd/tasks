// Реализуйте класс Anagram (Анаграмма это слово или фраза , 
//   полученный путем замены букв исходного слова или фразы). 
// Создать функцию для вывода ряда true, если слова являются анаграммами. 
// Добавить проверки на ввод

class Anagram {
  isValid(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      throw new Error('Вы передали не строку');
    }
  }

  reverseAnagram(str1, str2) {
    try {
      this.isValid(str1, str2);

      const reversedStr1 = str1.toLowerCase().split('').sort().join('');
      const reversedStr2 = str2.toLowerCase().split('').sort().join('');

      return reversedStr1 === reversedStr2;
    } catch (error) {
      return false;
    }
  }
}

const value1 = "обезьянство";
const value2 = "светобоязнь";

const anagram = new Anagram();
const isReverseAnagram = anagram.reverseAnagram(value1, value2);
console.log(isReverseAnagram);



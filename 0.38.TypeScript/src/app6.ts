//Напишите программу, которая проверяет, является ли заданная строка палиндромом.

function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/\s/g, '');
  
    for (let i = 0; i < cleanStr.length / 2; i++) {
      if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  const userInput = prompt('Введите строку для проверки на палиндром:');
  if (userInput !== null) {
    const result = isPalindrome(userInput);
  
    if (result) {
      alert(`${userInput} - это палиндром.`);
    } else {
      alert(`${userInput} - это не палиндром.`);
    }
  };
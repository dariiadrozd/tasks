// ДополнитьклассValidator.ДобавитьметодisPhoneдляпроверкинаномер
// телефона

class Validator {
  isValid(str) {
    if (typeof str !== 'string') {
      throw new Error('Вы передали не строку');
    }
  }

  isPhone(str) {
    try {
      const phone = /^\+48\s\d{3}\s\d{3}\s\d{3}$/; 
      return phone.test(str); 
    } catch (error) {
      return false;
    }
  }
}

const validator = new Validator();
const resultPhone = validator.isPhone('+48 884 062 873');
console.log(resultPhone);
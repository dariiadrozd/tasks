// РеализуйтеклассСonversion,сдержащийметодdoOctalNumber,
// преобразующий все числа 10 системы счисления в 8

class Сonversion{

  doOctalNumber(){
    const num = parseInt(binary,2);
    const num2 = num.toString(8);
    return num2;
  }
}

const conversion = new Сonversion();
const binary = '101010'
const result = conversion.doOctalNumber();
console.log(result);
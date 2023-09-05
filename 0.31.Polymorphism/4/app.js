// РеализуйтеклассPwd.PwdхранитфункциюshowPwd,котораяформируети возвращает 
// рандомно сгенерированный пароль из 8 чисел. Класс Validation является 
// производным по отношению к базовому, родительскому Pwd и содержит функцию 
// showPwd. Необходимо переопределить showPwd из базового класса и записать в 
// переменную используя метод super. Далее дополняем переопределенный метод 
// отображением результата в console.

class Pwd{

  showPwd(){
    let str = '';
    for(let i=0; i<8;i++){
      str += Math.floor(Math.random()*10)
    }
    return str;
  }

}

class Validation extends Pwd{
  isValid(){
if(pass.length<8) throw new Error('error')
  }
  
showPwd(){
  try{
    const pass = super.showPwd();
    this.isValid(pass)
    console.log(pass);
  }catch(er){
    console.log(er.message); 
  }

}
}

const validation = new Validation();
validation.showPwd();

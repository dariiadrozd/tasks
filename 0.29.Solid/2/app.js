// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором происходит проверка на почту. 
// Вывести true, если провека успешна

class DomHtml{
  constructor(){
    this.middleware();
  }

  middleware(){
    const btn = document.querySelector('button');
    btn.addEventListener('click', ()=>{
      try{
const inp = document.querySelector('input');
if(/^[a-zA-Z0-9._%+-]+@gmail\.com$/gm.test(inp)) throw new Error('error gmail')
alert(true)
      }catch(error){
        alert(error.message)
      }
    })
  }
}
const domHtml = new DomHtml()
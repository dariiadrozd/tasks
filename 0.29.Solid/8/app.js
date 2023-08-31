// РеализуйтеклассDomHtml,которыйбудетвзаимодействоватьсDOMпокликуна кнопку. 
// Класс содержит 1 метод валидации, называемый middleware, в котором происходит проверка на uuid, введенный в input. 
// Вывести true, если провека успешна.

class DomHtml {
  constructor() {
    this.middleware();
  }

  middleware() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
      try {
        const inp = document.querySelector('input').value;
        if (!/^[0-9a-z]{8}\-[0-9a-z]{4}\-[0-9a-z]{4}\-[0-9a-z]{4}\-[0-9a-z]{12}$/gm.test(inp)) throw new Error('error');
        alert(true)
      } catch (error) {
        alert(error.message)
      }
    })
  }
}

const domHtml = new DomHtml()
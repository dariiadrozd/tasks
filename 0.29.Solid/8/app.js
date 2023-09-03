// РеализуйтеклассDomHtml,которыйбудетвзаимодействоватьсDOMпокликуна кнопку. 
// Класс содержит 1 метод валидации, называемый middleware, в котором происходит проверка на uuid, 
// введенный в input. Вывести true, если провека успешна.

class DomHtml {

  middleware() {
    const btn = document.querySelector('button');
    const div = document.querySelector('div')
    btn.addEventListener('click', function () {
      const inp = document.querySelector('input').value;
      const uuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
      const errorUuid = uuid.test(inp);
      div.textContent = `${errorUuid ? 'true' : 'false'}`
    })
  }
}

const domHtml = new DomHtml();
domHtml.middleware();


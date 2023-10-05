// 1. Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик события. Задача:
// • По клику на кнопку необходимо получить значение input и отобразить в пустой div (в созданной html разметке) посредством InnerHTML.
// • Добавить стили для отображения текста input: например, изменить цвет букв.
// • Добавить проверки на получение значения input

class HTML {
  bindOption() {
    const btn = document.querySelector('button');

    btn.addEventListener('click', () => {
      const inp = document.querySelector('input');
      try {
        if (!inp.value) throw new Error('пустой ввод')
        const div = document.querySelector('div');
        div.innerHTML = inp.value
        inp.value = '';

      } catch (error) {
        inp.style = 'border:1px solid red';
        alert(error.message)
      }

    })
  }
}

const html = new HTML();
html.bindOption();
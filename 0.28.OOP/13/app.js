// Реализуйте класс ServerPost. Обязательными функциями считаются функции middleware, controller, service, repository. 
// Цепочка взаимодействия между методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с этим массивом осуществляется только в repository. 
// Массив находится в приложении Задание:
// на вход подается JSON вида:
// `{
// "label": "JavaScript", "category": "programmingLanguages", "priority": 1
// }`
// Неоходимо добавить в массив БД объект только в том случае, если нет совпадений по label. 
// Если совпадения нет, то в объект клиента добавить ключ id со значением label в toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1} Если совпадение есть – ошибка. Добавить проверки

class ServerPost {
  middLeware(obj) {
    try {
      const midd = this.controller(obj);
      return midd;
    } catch (error) {
      return error.message;
    }
  }

  controller(obj) {
    const contr = this.service(obj);
    return contr;
  }

  service(obj) {
    const serv = this.repository(obj);
    if (serv.length === 0) {
      throw new Error('Совпадений не найдено');
    }
    return serv;
  }

  repository(obj) {
    const arr = [
      { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
      { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
      { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
      { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
    ];

    const result = [];
    arr.forEach(function (el) {
      if (el.label === obj.label) {
        result.push(el);
      }
    });

    return result;
  }
}

const serverPost = new ServerPost();
const obj = {
  label: "JavaScript",
  category: "programmingLanguages",
  priority: 1
}

console.log(serverPost.middLeware(obj));





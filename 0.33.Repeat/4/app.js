// 4. РеализуйтеклассServerPost.Обязательнымифункциямисчитаютсяфункции middleware, controller, service, repository. Цепочка взаимодействия между методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. 
// Взаимодействие с этим массивом осуществляется только в repository. Массив находится в приложении Задание:
// на вход подается JSON вида:
// `{
// "name": "Test", "age": 1
// }`
// Необходимо добавить в массив БД объект только в том случае, если нет совпадений по name. 
// Если совпадения нет, то в объект клиента добавить ключ id с последним возможным уникальным id БД, 
// таким образом, чтобы в БД был запушен объект вида {"id": 6, "name": "Test", "age": 1}
// Если совпадение есть – ошибка. Добавить проверки

class ServerPost {
  controller(obj) {
    try {
      const serv = this.service(obj);
    } catch (error) {
      return error.message;
    }
  }

  service(obj) {
    const rep = this.repository(obj);
    return rep
  }

  repository(obj) {
    const arr = [
      { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
      { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" }, { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" }, { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
      { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
    ]
    const new_arr = arr.filter((el) => el.name == obj.name);
    if (new_arr == true) {
      arr.push({ obj })
    } else {
      throw new Error('кринж')
    }
  }
}

const serverPost = new ServerPost();
const obj = `{'id':6, "name": "Test", "age": 1}`
const result = serverPost.controller(obj);
console.log(result);
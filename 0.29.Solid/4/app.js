// РеализуйтеклассServerGetById.Обязательнымифункциямисчитаютсяфункции 
// middleware, controller, service, repository. 
// Цепочка взаимодействия между методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
//  – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. 
// Взаимодействие с этим массивом осуществляется только в repository. 
// Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой имеется.
//  В противном случае бросить исключение. Добавить проверки

class ServerGetById {

  controller(obj) {
    try {
      const con = this.service(obj);
      return con;
    } catch (error) {
      return error.message;
    }

  }

  service(obj) {
    const ser = this.repository(obj);
    return ser;
  }
  repository(obj) {
    const arr = [{ "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 }, { "id": 4, "name": "German", "age": 18 }, { "id": 5, "name": "Maria", "age": 27 }];
    const filtered = arr.filter((el) => (el.id === obj.id))
    return filtered;
  }
}

const serverGetById = new ServerGetById();
const obj = JSON.parse(`{"id": 1 }`);
const result = serverGetById.controller(obj);
console.log(result);

// Реализуйте класс ServerPost. Обязательными функциями считаются функции 
// middleware, controller, service, repository. Цепочка взаимодействия между методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. 
// Взаимодействие с этим массивом осуществляется только в repository.
// Массив находится в приложении Задание:
// на вход подается JSON вида:
// `{
// "name": "Test", "age": 1
// }`
// Необходимо добавить в массив БД объект только в том случае, если нет совпадений по name. 
// Если совпадения нет, то в объект клиента добавить ключ id с последним возможным уникальным id БД, 
// таким образом, чтобы в БД был запушен объект вида {"id": 6, "name": "Test", "age": 1}
// Если совпадение есть – ошибка. Добавить проверки

// class ServerPost {

//   controller(obj) {
//     try {
//       const con = this.service();
//       return con;
//     } catch (error) {
//       return error.message;
//     }
//   }

//   service(obj) {
//     const ser = this.repository();
//     return ser;
//   }

//   repository(obj) {
//     const arr = [
//       { "id": 1, "name": "Yesenia", "age": 22 },
//       { "id": 2, "name": "Hanna", "age": 22 },
//       { "id": 3, "name": "Stanislau", "age": 25 }, { "id": 4, "name": "German", "age": 18 }, { "id": 5, "name": "Maria", "age": 27 }
//     ]
//     const filtered = this.arr.filter((el) => el.id === obj.id);
//     return filtered;

//   }
// }

// const serverPost = new ServerPost();
// const obj = JSON.parse(`{"name": "Test", "age": 1}`)
// const result = serverPost.controller();
// console.log(result);


class ServerGetById {
  controller() {
    try {
      const obj = JSON.parse(`{"name": "Test", "age": 1}`)

      if (!obj || !obj.id || typeof obj.id !== 'number') {
        throw new Error('Invalid input. Please provide a valid "id"');
      }

      const result = this.service(obj.id);

      if (result.length === 0) {
        throw new Error('User not found');
      }

      return result;
    } catch (error) {
      return error.message;
    }
  }

  service(id) {
    const result = this.repository(id);
    return result;
  }

  repository(id) {
    const arr = [
      { "id": 1, "name": "Yesenia", "age": 22 },
      { "id": 2, "name": "Hanna", "age": 22 },
      { "id": 3, "name": "Stanislau", "age": 25 },
      { "id": 4, "name": "German", "age": 18 },
      { "id": 5, "name": "Maria", "age": 27 }
    ];

    const filtered = arr.filter((el) => el.id === id);
    return filtered;
  }
}

const serverGetById = new ServerGetById();
const result = serverGetById.controller();
console.log(result);
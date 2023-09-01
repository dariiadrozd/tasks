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

class ServerGetById{
constructor(){
  this.name = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 }, { "id": 4, "name": "German", "age": 18 }, { "id": 5, "name": "Maria", "age": 27 }
    ]
}

middleware(obj){
  try{
    const obj = JSON.parse(`{"id": 1}`)
    if(!obj || isNaN(obj.id)) throw new Error('error')
  }catch(error){
alert(error.message)
}

}

  controller(){
const con = this.middleware();
const valid = this.service(con)
return valid;
  }

  service(){
const ser = this.repository(obj);
if(ser){
  return ser
}else{
  throw new Error('"id" not found')
}
  }

  repository(){
    const id = obj.id;
    const result = this.data.find(item => item.id === id);
    return result;
  }
}

const serverGetById = new ServerGetById();
const result = controller.ServerGetById();
console.log(result);
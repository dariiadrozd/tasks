// Классы Person и Customer. Напишите класс Person с атрибутами данных для имени, адреса и телефонного номера человека. Затем напишите класс Customer (Клиент), который является подклассом класса Person. Класс Customer должен иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет. Продемонстрируйте методы получатели и модификаторы экземпляра класса Customer

class Person {
  name;
  address;
  phoneNumber;
  getName() {
    return this.name;
  }
  getAddress() {
    return this.address;
  }
  getPhoneNumber() {
    return this.phoneNumber
  }
  setName(name) {
    this.name = name
  }
  setAddress(address) {
    this.address = address
  }
  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber
  }
}

class Customer extends Person {
  numberOfClient;
  bool;
  getNumbetOfClient() {
    return this.numberOfClient;
  }
  getBool() {
    return this.bool;
  }
  setNumbetOfClient(numberOfClient) {
    this.numberOfClient = this.numberOfClient;
  }
  setBool(bool) {
    this.bool = bool;
  }
}
const customer = new Customer();
customer.setName('Darya');
customer.setAddress('Targowa 76');
customer.setPhoneNumber('+48884962873');
customer.setNumbetOfClient(5);
customer.setBool(true);
const name_ = customer.getName();
const address = customer.getAddress();
const phoneNumber = customer.getPhoneNumber();
const numberOfClient = customer.getNumbetOfClient();
const bool = customer.getBool();
console.log(name_,address,phoneNumber,numberOfClient,bool);


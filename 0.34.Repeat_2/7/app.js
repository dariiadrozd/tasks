// Абстрактная фабрика для создания мебели
function FurnitureFactory() {
    this.createTable = function() {
      return "Стол";
    };
    this.createChair = function() {
      return "Стул";
    };
  }
  
  // Создаем фабрику мебели
  const factory = new FurnitureFactory();
  
  // Используем фабрику для создания столов и стульев
  const table = factory.createTable();
  const chair = factory.createChair();
  
  console.log(table); // Вывод: "Стол"
  console.log(chair); // Вывод: "Стул"
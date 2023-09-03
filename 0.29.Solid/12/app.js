// Реализуйте класс Sort, сдержащий метод sortData, 
// сортирующий все числа статичного массива сортировкой пузырьком
 
class Sort {
  sortData(arr) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          let sortArr = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = sortArr;
        }
      }
    }
    return arr;
  }
}
let sort = new Sort();
console.log(sort.sortData([1,5,2,7,3,8,4,9,6]));
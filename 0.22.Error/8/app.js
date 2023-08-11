// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// Оценка сложности пузырьковой сортировки
// Оценим сложность этого алгоритма.
// Допустим, на вход подается полностью отсортированный массив из 10 элементов, то есть n=10. Мы сравниваем все пары элементов от начала до конца, менять ничего не нужно. Таким образом за 10 операций сравнения на выходе мы получаем отсортированный массив. Вроде всё супер, алгоритм работает и очень быстро!
// А что, если подать на вход массив, отсортированный в обратном порядке? Алгоритм этому точно не обрадуется. Ему придется выполнить 10 проходов по массиву и выполнить по 10 перестановок на каждом проходе, то есть выполнить 100 операций сравнения и перестановок.
// Это худший случай для этого алгоритма, и мы видим, что в этом случае придется выполнить 𝑛2 операций. 

function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Меняем местами элементы
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    
    return arr;
  }
  
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray);
  
  console.log(sortedArray);
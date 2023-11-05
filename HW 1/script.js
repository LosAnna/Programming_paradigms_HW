// Задача №1
// Дан список целых чисел numbers. Необходимо написать в императивном стиле процедуру для
// сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки.

const arr = [7, 5, 9, 1, 6, 3, 8, 2];

for (let j = arr.length - 1; j > 0; j--) {
  // Пузырьковая сортировка
  for (let i = 0; i < j; i++) {
    if (arr[i] < arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}
console.log(arr);

// Задача №2
// Написать точно такую же процедуру, но в декларативном стиле

arr.sort((a, b) => b - a);
console.log(arr);
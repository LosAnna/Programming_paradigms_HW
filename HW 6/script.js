// Ваша задача:
// Написать программу на любом языке в любой парадигме для
// бинарного поиска. На вход подаётся целочисленный массив и
// число. На выходе - индекс элемента или -1, в случае если искомого
// элемента нет в массиве.

const array = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];  // 11 elements
const number = 5;

function binarySearch(array, number) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let currentElement = array[mid];
        if (currentElement === number) {
            return mid;
        }
        else if (number < currentElement) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1;
};

console.log(binarySearch(array, number));
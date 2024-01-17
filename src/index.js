import { mergeSort } from './mergeSort.js';
import { fibs } from './recursion.js'
import { fibsRec } from './recursion.js'

let answer = fibsRec (10);
console.log(answer)


let ans = fibs(10);
console.log(ans);

const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

const sortedArr1 = mergeSort(arr1);
const sortedArr2 = mergeSort(arr2);

console.log("Sorted array 1:", sortedArr1);
console.log("Sorted array 2:", sortedArr2);
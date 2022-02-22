function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin([2, 4, 3333, 3]));

function sortFn(arr) {
  let result = [];
  while (arr.length > 0) {
    let min = findMin(arr);
    result.push(min);
    arr.splice(arr.indexOf(min), 1);
  }
  return result;
}
console.log(sortFn([2, 4, 3333, 3]));

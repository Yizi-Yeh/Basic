function findSmallTotal(arr, n) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < n) {
      sum++;
    }
  }
  return sum; 
}

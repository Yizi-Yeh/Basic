function isPrime(n) {
  if (n === 1) {
    return false;
  }
  let starter = 2;
  while (starter < 2) {
    if (n % starter === 0) {
      return false;
    }
    starter++
  }
  return true
}

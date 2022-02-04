let luckyNumber = [7, 14, 53, 23, 123];

// forEach funciton
// 參數是個function
luckyNumber.forEach(function checkNumber(n) {
  if (n > 20) {
    console.log(n);
  }
});

// -------------------------------------------
// 等同於上述的做法
function checkNumber(n) {
  if (n > 20) {
    console.log(n);
  }
} 

luckyNumber.forEach(checkNumber)

// -------------------------------------------

for (let i = 0; i <= luckyNumber.length; i++) {
  if (luckyNumber[i] > 20) {
    console.log(luckyNumber[i]);
  }
}

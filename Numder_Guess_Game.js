// answer 0-99

let answer = Math.floor(Math.random() * 100);

let n1 = 0;
let n2 = 99;

while (true) {
  // 不會執行continue之下的程式碼
  // 重新進入while迴圈
  let guess = prompt(`Make your guess,(between ${n1} and ${n2})`);
  if (guess < n1 || guess > n2) {
    alert("Please make a valid input");
    continue;
  }
  if (guess == answer) {
    alert("you win the game");
    break;
  } else if (guess <= anser) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}

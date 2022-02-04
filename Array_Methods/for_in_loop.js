// 枚舉屬性
// Array Object

let Angel = {
  name: "Angel Yeh",
  age: 25,
};

for (let i in Angel) {
  console.log(i);
}
// name age

let numbers = [10, 20, 30];
for (let i in numbers) {
  console.log(i);
}
// 0 1 2

let numbers = [10, 20, 30];
for (let i in numbers) {
  console.log(numbers[i]);
}
// 10, 20, 30
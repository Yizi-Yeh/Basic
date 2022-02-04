// 可對可進行循環的物件進行迭代
// String, Array,
// 無法用於物件

let numbers = [10, 20, 30];
for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((n) => {
  console.log(n);
});

for (let n of numbers) {
  console.log(n);
}
// 10, 20, 30

let myName = 'Angel'
for(let n of myName){
    console.log(n)
}
// A n g e l 
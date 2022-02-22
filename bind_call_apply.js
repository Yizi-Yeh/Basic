// Funciton are objects in JS
// Bind, Call, Apply (共用methods)

let yiz = {
  name: "yiz yeh",
  age: 25,
};

function getAge() {
  console.log(this.age);
}
getAge();
// clg => undefind
// this 指的是 window

// bind 綁定
// 可以對 getAge function 綁定 this 為哪個物件
getAge().bind(yiz);
// 綁定yiz物件，這樣this就會是yiz
// getAge().bind(yiz);會回傳一個新的function，所以需要將他賦值給變數
let getYizAge = getAge().bind(yiz);
getYizAge();
// clg => 25

// call 執行
// call 會直接去getAge()function
// 在 call 裡面丟入的參數 yiz object，就會變成 getAge 中的 this keyword
// 不會回傳新function
getAge().call(yiz);

// 若有其他參數要傳入
function getAge(country, height) {
  console.log(this.age);
  console.log(country);
  console.log(height);
}
getAge().call(yiz, "Taiwan", 160);
// clg => 25 Taiwan 160

// apply
// 後面的參數改為[]形式
getAge().apply(yiz, ["Taiwan", 160]);

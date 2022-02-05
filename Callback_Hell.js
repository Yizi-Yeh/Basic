function getData(name) {
  setTimeout(() => {
    return { name: name, age: Math.random() * 20, major: "cs" };
  }, 2000);
}

console.log("start");

let data = getData("Angel");
console.log(data);

console.log("end");

// output : start undefined end
// data須等待，所以資料尚未回來時會是undefined
// 為了處理此問題，使用callback function

function getData(name, callback) {
  setTimeout(() => {
    callback({ name: name, age: Math.random() * 30, major: "cs" });
  }, 2000);
}

console.log("start");

getData("Angel", (obj) => {
  console.log(obj);
});

console.log("end");
// output : start { name: name, age: 10, major: "cs" } end
// 當取得data後，根據年紀做其他事

function getMovies(age, callback) {
  if (age < 12) {
    setTimeout(() => {
      callback("cartoon movie");
    }, 1500);
  } else if (age < 18) {
    setTimeout(() => {
      callback("teen movies");
    }, 1500);
  } else {
    setTimeout(() => {
      callback("adult movie");
    }, 1500);
  }
}

console.log("start");

getData("Angel", (obj) => {
  console.log(obj);
  getMovies(obj.age, (str) => {
    console.log(str);
  });
});

console.log("end");
// output : start end { name: name, age: 10, major: "cs" } 'adult movie'

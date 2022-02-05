// Object
// 參數是一個function 此 function的參數為 resolve / reject

// let example = new Promise((resolve, reject) => {
//   resolve({ name: "Angel", age: 20 });
// });
// example.then((d) => {
//   console.log(d);
// });

// let example = new Promise((resolve, reject) => {
//   reject(new Err("not allow"));
// });
// example
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

function getData(name) {
  if (name === "Angel") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "Angel Yeh", age: Math.floor(Math.random() * 20) });
      }, 2000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Not allowed to access data"));
      }, 2000);
    });
  }
}

function getMovies(age) {
  if (age < 12) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ text: "catroon" });
      }, 1500);
    });
  } else if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ text: "teen movies" });
      }, 1500);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("not allowed. Too old"));
      }, 1500);
    });
  }
}

async function showMovie() {
  // 獲得getData("Angel")的data後，放入obj
  try {
    const obj = await getData("Angel");
    const movie = await getMovies(obj.age);
    console.log(movie.text);
  } catch (e) {
    console.log(e);
  }
}
showMovie();


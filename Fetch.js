// Fetch API

function getJoke() {
  // 可串then() / catch() 因為他是promise
  fetch("URL")
    .then((d) => {
      console.log(d);
    })
    .catch((e) => {
      console.log(e);
    });
}

async function getJoke() {
  let data = await fetch("URL");
  //  將之轉為json格式
  let parseData = await data.json();
  console.log(parseData);
}
getJoke();

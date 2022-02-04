// array
let lucky = [2, 36, 93];
// length, index
// push, pop, shift, unshift

// HTMLCollection
// 不可使用forEach function
let secondsElement = document.getElementsByClassName("second");

// NodeList
// 可使用forEach function
let secondsQuery = document.querySelectorAll(".seconds");
secondsQuery.forEach((tag) => {
  console.log(tag);
});

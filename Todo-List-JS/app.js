
let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", (e) => {
  e.preventDefault()

let form = e.target.parentElement
let todoText = form.children[0].value
let todoMonth = form.children[1].value
let todoDay = form.children[2].value


let todo = document.createElement("div")
todo.classList.add("todo")
let text = document.createElement("p")


});

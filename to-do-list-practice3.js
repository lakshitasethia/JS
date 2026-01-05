// 1. Load data from localStorage when the page loads
// If there is no data, default to an empty array []
let myArrayToDo = JSON.parse(localStorage.getItem("toDo")) || [];
let myArrayDate = JSON.parse(localStorage.getItem("date")) || [];
let myArrayDelete = JSON.parse(localStorage.getItem("delete")) || [];

// 2. Call render immediately to show the stored todos
render();

function render() {
  document.querySelector(".display-to-do").innerHTML = myArrayToDo.join("<br>");
  document.querySelector(".date-display").innerHTML = myArrayDate.join("<br>");
  document.querySelector(".delete").innerHTML = myArrayDelete.join("<br>");
}

function deleteToDo() {
  myArrayToDo.pop();
  myArrayDate.pop();
  myArrayDelete.pop();

  render();
  saveToStorage();
}

function addToDo() {
  myArrayToDo.push(document.querySelector(".js-text").value);
  myArrayDate.push(document.querySelector(".js-date").value);
  myArrayDelete.push(
    '<button class="delete-button" onclick="deleteToDo();">Delete</button>'
  );

  document.querySelector(".js-text").value = "";
  document.querySelector(".js-date").value = "";

  render();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("toDo", JSON.stringify(myArrayToDo));
  localStorage.setItem("date", JSON.stringify(myArrayDate));
  localStorage.setItem("delete", JSON.stringify(myArrayDelete));
}

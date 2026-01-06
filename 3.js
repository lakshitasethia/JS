let myArrayToDo = [];
let myArrayDate = [];
let myArrayDelete = [];

function deleteToDo() {
  myArrayToDo.pop();
  myArrayDate.pop();
  myArrayDelete.pop();

  document.querySelector(".display-to-do").innerHTML = myArrayToDo.join("<br>");
  document.querySelector(".date-display").innerHTML = myArrayDate.join("<br>");
  document.querySelector(".delete").innerHTML = myArrayDelete.join("<br>");
}

function addToDo() {
  myArrayToDo.push(document.querySelector(".js-text").value);
  document.querySelector(".display-to-do").innerHTML = myArrayToDo.join("<br>");

  myArrayDate.push(document.querySelector(".js-date").value);
  document.querySelector(".date-display").innerHTML = myArrayDate.join("<br>");

  myArrayDelete.push(
    '<button class="delete-button" onclick="deleteToDo();">Delete</button>'
  );
  document.querySelector(".delete").innerHTML = myArrayDelete.join("<br>");

  document.querySelector(".js-text").value = "";
  document.querySelector(".js-date").value = "";
}

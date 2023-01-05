// Variables =>

const form = getElement("addForm");

const todos = getElement("todos");

const filter = getElement("filter");

const todo = getElement("todo");

const liItems = document.getElementsByTagName("li");

console.log(liItems);
// eventListeners  =>

//form submit
form.addEventListener("submit", addTodo);

// delete todo
todos.addEventListener("click", removeTodo);

// search to do
filter.addEventListener("keyup", searchTodo);

// finctions  =>

function getElement(id) {
  return document.getElementById(id);
}

function addTodo(e) {
  e.preventDefault();

  // get input
  let newTodo = todo.value;

  // create li Element

  let li = document.createElement("li");

  // add class in li

  li.className = "list-group-item ";

  li.innerText = newTodo;

  // create deltete button

  let del = document.createElement("button");

  del.className = "btn btn-danger btn-sm delete";

  del.innerText = "delete";
  // append

  li.append(del);

  todos.append(li);

  todo.value = "";
}

function removeTodo(e) {
  if (e.target.classList.contains("delete")) {
    let result = confirm("Are you sure ?");

    if (result) {
      let li = e.target.parentElement;

      todos.removeChild(li);
    }
  }
}

function searchTodo(e) {
  // convert to lowercase

  let searchText = e.target.value.toLowerCase();

  // get the list items

  Array.from(liItems).forEach((item) => {
    let todoName = item.firstChild.textContent;

    console.log(todoName.toLowerCase().indexOf(searchText));

    if (todoName.toLowerCase().indexOf(searchText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

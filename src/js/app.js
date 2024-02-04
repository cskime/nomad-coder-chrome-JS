const $asking = document.getElementById("asking");
const $greeting = document.getElementById("greeting");
const $nameInput = $asking.querySelector("input");
const $toDoContainer = document.getElementById("todo-container");
const $toDoInput = $toDoContainer.querySelector("input");
const $toDoList = document.getElementById("todo-list");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "name";
const TODO_KEY = "todo";

/* Variable */

let isLogin = false;
let toDos = [];

/* Storage */

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

/* Name */

function showAsking(show, callback) {
  if (show) {
    $asking.classList.remove(HIDDEN_CLASS_NAME);
  } else {
    $asking.classList.add(HIDDEN_CLASS_NAME);
  }
  $asking.addEventListener("transitionend", callback);
}

function showGreeting(name, callback) {
  const date = new Date();
  const hour = date.getHours();

  if (hour < 6) {
    $greeting.innerText = `Good night, ${name}.`;
  } else if (hour < 12) {
    $greeting.innerText = `Good morning, ${name}.`;
  } else if (hour < 18) {
    $greeting.innerText = `Good afternoon, ${name}.`;
  } else {
    $greeting.innerText = `Good evening, ${name}.`;
  }

  $greeting.classList.remove(HIDDEN_CLASS_NAME);
  $greeting.addEventListener("transitionend", callback);
}

/* To do */

function showToDoList() {
  $toDoContainer.classList.remove(HIDDEN_CLASS_NAME);
}

function loadToDos() {
  const savedToDo = localStorage.getItem(TODO_KEY);
  if (savedToDo) {
    const parsedToDo = JSON.parse(savedToDo);
    parsedToDo.forEach((todo) => {
      addToDo(todo);
    });
    toDos = parsedToDo;
  }
}

function updateDone(id) {
  const index = toDos.findIndex((element) => {
    return element.id === id;
  });
  const isDone = toDos[index].isDone;
  toDos[index].isDone = !isDone;
  saveToDos();
}

function addToDoItem(todo) {
  const TODO_ITEM_TEXT_DONE_CLASSNAME = "todo-item__text--done";

  const li = document.createElement("li");
  li.id = todo.id;
  li.className = "todo-item";

  const button = document.createElement("button");
  button.className = "todo-item__checkbox";
  button.innerText = todo.isDone ? "✓" : "";
  button.addEventListener("click", (event) => {
    const li = event.target.parentNode;
    updateDone(parseInt(li.id));

    button.innerText = todo.isDone ? "✓" : "";

    const h3 = li.childNodes[1];
    h3.classList.toggle(TODO_ITEM_TEXT_DONE_CLASSNAME);
  });
  li.appendChild(button);

  const h3 = document.createElement("h3");
  h3.innerText = todo.text;
  if (todo.isDone) {
    h3.classList.add(TODO_ITEM_TEXT_DONE_CLASSNAME);
  }
  li.appendChild(h3);

  $toDoList.appendChild(li);
}

function addToDo(todo) {
  toDos.push(todo);
  saveToDos();
  addToDoItem(todo);
}

/* main */

function login() {
  const username = $nameInput.value;
  if (username === "") {
    return;
  }

  $nameInput.value = "";
  showAsking(false, () => {
    showGreeting(username, () => {
      showToDoList();
      localStorage.setItem(USERNAME_KEY, username);
      isLogin = true;
    });
  });
}

addEventListener("load", () => {
  const username = localStorage.getItem(USERNAME_KEY);
  if (!username) {
    showAsking(true);
    return;
  }

  showGreeting(username, () => {
    showToDoList();
    isLogin = true;
    loadToDos();
  });
});

document.addEventListener("keypress", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  if (!isLogin) {
    login();
    return;
  }

  const newToDo = {
    id: Date.now(),
    text: $toDoInput.value,
    isDone: false,
  };
  addToDo(newToDo);
  $toDoInput.value = "";
});

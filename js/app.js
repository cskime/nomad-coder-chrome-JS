/* Constant */

const nameContainer = document.getElementById("name-container");
const nameInput = document.querySelector("#name-container input");
const greeting = document.getElementById("greeting");
const toDoInput = document.querySelector("#todo-container input");
const toDoList = document.getElementById("todo-list");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "name";

/* Variable */

let isLogin = false;

/* Name */

function showNameInput(show) {
  if (show) {
    nameContainer.classList.remove(HIDDEN_CLASS_NAME);
  } else {
    nameContainer.classList.add(HIDDEN_CLASS_NAME);
  }
}

/* Greeting */

function showGreeting(name) {
  const date = new Date();
  const hour = date.getHours();

  if (hour < 6) {
    greeting.innerText = `Good night, ${name}.`;
  } else if (hour < 12) {
    greeting.innerText = `Good morning, ${name}.`;
  } else if (hour < 18) {
    greeting.innerText = `Good afternoon, ${name}.`;
  } else {
    greeting.innerText = `Good evening, ${name}.`;
  }

  greeting.classList.remove(HIDDEN_CLASS_NAME);
}

/* To do */

function addToDoItem(item) {
  const toDoItem = document.createElement("li");
  toDoItem.className = "todo-item";

  const button = document.createElement("button");
  button.className = "todo-item__checkbox";
  button.addEventListener("click", (event) => {
    const h3 = event.target.parentNode.childNodes[1];
    h3.classList.toggle("todo-item__text--done");
  });
  toDoItem.appendChild(button);

  const span = document.createElement("h3");
  span.innerText = item;
  toDoItem.appendChild(span);

  toDoList.appendChild(toDoItem);
}

/* main */

const username = localStorage.getItem(USERNAME_KEY);
if (username === null) {
  showNameInput(true);
} else {
  showGreeting(username);
  isLogin = true;
}

function login() {
  const username = nameInput.value;
  if (username === "") {
    return;
  }

  nameInput.value = "";
  showNameInput(false);
  nameContainer.addEventListener("transitionend", () => {
    showGreeting(username);
    localStorage.setItem(USERNAME_KEY, username);
    isLogin = true;
  });
}

document.addEventListener("keypress", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  if (isLogin) {
    addToDoItem(toDoInput.value);
    toDoInput.value = "";
  } else {
    login();
  }
});

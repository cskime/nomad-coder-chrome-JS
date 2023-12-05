/* Constant */

const container = document.getElementById("info-container");
const nameContainer = document.getElementById("name-container");
const nameInput = document.querySelector("#name-container input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "name";

/* Random */

function randomInt(range) {
  return Math.floor(Math.random() * range);
}

function randomBackgroundImage() {
  const images = ["0.jpg", "1.jpg", "2.jpg"];
  const image = images[randomInt(3)];
  return `url(img/${image})`;
}

/* Background */

document.body.style.backgroundImage = randomBackgroundImage();

/* Clock */

const clock = document.getElementById("clock");

function padZero(number) {
  return String(number).padStart(2, "0");
}
function currentTimeString() {
  const date = new Date();
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  return `${hour}:${minute}`;
}
function updateClock() {
  clock.innerText = currentTimeString();
}
updateClock();
setInterval(updateClock, 1000);

/* Name & Greeting */

function showNameInput(show) {
  if (show) {
    nameContainer.classList.remove(HIDDEN_CLASS_NAME);
  } else {
    nameContainer.classList.add(HIDDEN_CLASS_NAME);
  }
}

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

const username = localStorage.getItem(USERNAME_KEY);
if (username === null) {
  showNameInput(true);
} else {
  showGreeting(username);
}

window.addEventListener("keypress", (event) => {
  const pressed = event.key;
  if (pressed !== "Enter") {
    return;
  }

  const username = nameInput.value;
  if (username === "") {
    return;
  }

  showNameInput(false);
  container.addEventListener("transitionend", () => {
    showGreeting(username);
    localStorage.setItem(USERNAME_KEY, username);
  });
});

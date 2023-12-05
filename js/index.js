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

function padZero(number) {
  return String(number).padStart(2, "0");
}
function currentTimeString() {
  const date = new Date();
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  return `${hour}:${minute}`;
}
const clock = document.getElementById("clock");
clock.innerText = currentTimeString();

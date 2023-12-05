function randomInt(range) {
  return Math.floor(Math.random() * range);
}

/* Background */

const images = ["0.jpg", "1.jpg", "2.jpg"];
function fetchBackgroundImage() {
  return images[randomInt(3)];
}
document.body.style.backgroundImage = `url(img/${fetchBackgroundImage()})`;

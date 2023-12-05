const images = ["0.jpg", "1.jpg", "2.jpg"];
const choosenImage = images[Math.floor(Math.random() * images.length)];

/*  [ JavaScript에서 HTML에 Element 추가하기 ]
    - `createElement(tagName)` : JavaScript로 HTML element 생성
    - `appendChild()` : HTMLElement 하위의 가장 마지막에 다른 HTML element를 추가
    - `prepend()` : HTMLElement 하위의 가장 첫번째에 다른 HTML element를 추가
*/

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${choosenImage}`;
document.body.appendChild(backgroundImage);

const images = ["0.jpg", "1.jpg", "2.jpg"];
const choosenImage = images[Math.floor(Math.random() * images.length)];

/*  [ JavaScript에서 HTML에 Element 추가하기 ]
    - `createElement(tagName)` : JavaScript로 HTML element 생성
    - `appendChild()` : HTMLElement 하위에 다른 HTML element를 추가함
        - 'append'이므로 가장 마지막에 추가한다.
*/

const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${choosenImage}`;
document.body.appendChild(backgroundImage);

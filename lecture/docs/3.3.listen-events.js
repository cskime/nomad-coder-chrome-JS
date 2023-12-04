/*  [ CSS 변경하기 ]
    - `style` : property로 접근할 수 있는 object
    - Element의 CSS style을 JS object 형식으로 접근하고 수정할 수 있음
    - 가능하긴 하지만 style은 CSS에서 변경하는게 낫다.
*/

const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);
h1.style.color = "blue";

/*  [ Listening events ]
    - click, hover, finish input, press enter, wifi connection ...
    - JS에서 이 event들을 구독해서 특정 동작을 실행시킬 수 있다.

    [ Usage ]
    1. addEventListener(event, listener)
        - event : 구독할 event 종류
        - listenr : Event가 발생했을 때 실행될 function
        - 사용 가능한 event 종류
            -`on~`으로 시작하는 property 이름으로 사용할 수 있는 event를 알 수 있음
            - `onclick` -> "click"
            - `onmouseenter` -> "mouseenter"
    2. `on~` property에 function 할당
    
    * 나중에 removeEventListener()를 사용할 수 있도록 addEventListener() 사용
    * 취향 차이임. 보기 좋다거나... 등
*/

function handleTitleClick() {
  console.log("Title was clicked!");
}

/*  JS는 function을 일급 객체로 취급한다.
    1. 실행자(`()`)를 사용하지 않고 function name을 전달
    2. Argument 자리에 function을 바로 사용
    3. Variable 및 property에 function을 직접 할당
 */
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", function () {
  h1.innerText = "Mouse is Here!";
});
h1.onmouseleave = function () {
  h1.innerText = "Mouse is Gone!";
};

/*  [ Window ]
    - 브라우저에서 기본으로 제공하는 object
    - 브라우저 창(window)에 대한 정보를 JS object 형태로 제공
*/
// `resize` event는 h1 element에는 사용할 수 없음
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

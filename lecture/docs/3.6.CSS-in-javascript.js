/*  [ JavaScript로 Style 변경 ]
    - JavaScript는 상호 작용에만 사용하기로 하고 CSS는 CSS파일에서 하는 것을 선호
    - color, style name 등을 JS에서 언급하지 않음
    
    [ JavaScript에서 sylte 변경 방법 ]
    1. CSS에 style을 변경할 class 선언
    2. JS에서 className property에 1에서 선언한 class name 추가 

    [ Getter / Setter ]
    - getter : 값을 읽어올 때 실행되는 block
    - setter : 값을 변경할 때 실행되는 block
 */

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // 1. CSS style을 직접 변경하는 방법
  //   const currentColor = h1.style.color;
  //   if (currentColor === "blue") {
  //     newColor = "tomato";
  //   } else {
  //     newColor = "blue";
  //   }
  //   h1.style.color = newColor;

  // 2. Class name으로 간접적으로 변경하는 방법

  // - Class name은 따로 정의되어 있는게 아니므로 raw value로 사용해야 함
  // - Raw value 값을 일일이 입력하면 실수할 위험이 있으므로 변수에 담아서 쓰는게 더 필요할 것
  const clickedClass = "clicked";

  // - class name을 그냥 바꿔버리면 기존 class name을 덮어쓰는 문제가 있음
  // - JavaScript로는 class name을 직접 바꾸지 않는게 좋음
  //   if (h1.className === clickedClass) {
  //     h1.className = "";
  //   } else {
  //     h1.className = clickedClass;
  //   }

  // - 대신에, class list를 사용해서 새 name을 추가한다.
  // - classList는 `DOMTokenList` type인데, 여기에 있는 함수를 사용한다.
  //    - contains() : List에 특정 값이 들어있는지 반환
  //    - add() : List에 특정 값을 추가함
  //    - remove() : List에서 특정 값을 삭제함
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.classList.add(clickedClass);
  //   }

  // toggle() : List에 특정 값이 존재하면 삭제하고, 없다면 추가함
  h1.classList.toggle(clickedClass);
}
h1.addEventListener("click", handleTitleClick);

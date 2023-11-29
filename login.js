/*  [ 내부에 있는 element 찾는 방법 ]
    1. Document에서 찾아온 element에 querySelector 중첩
        ```
        const loginForm = document.querySelector("#login-form");
        const loginInput = loginForm.querySelector("input");
        ```
    2. Document로부터 한 번에 접근
        ```
        document.querySelector("#login-form button");
        ```
*/

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

/* Listen click event from block */
function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name.");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } else {
    console.log(username);
  }
}
loginButton.addEventListener("click", onLoginBtnClick);

/*  [ Validation in form ]
    - 사용자가 입력하는 값을 JS에서 검증할 수도 있지만, 브라우저의 기능을 사용할 수도 있음
    - input의 유효성 검사를 실행하기 위해서는 form을 사용해야 함
    - HTML에서 유효성 검사를 진행한다면 JS에서 하는 검사가 줄어든다.
*/

/*  [ Listening submit event ]
    - form을 사용한다면 button action은 click이 아닌 submit
    - submit event를 구독해도 정상적으로 동작하지 않음
    - submit action은 기본적으로 새로고침 동작을 하기 때문에, 새로 추가한 listener 동작 후에 페이지를 새로고침하여 원하는 결과를 얻을 수 없음
    - form 안에 있는 button 또는 submit type input의 새로고침 동작을 막아야 한다.

    [ Event Information ]
    - 브라우저는 listener로 추가한 function의 argument로 발생한 event object를 전달함
    - submitter, 호출 시간 등 발생한 event와 관련된 정보들을 얻을 수 있다.

    [ Prevent default behavior of events ]
    - Listener로 전달되는 event object의 `preventDefault()` 호출
    - Event의 기본 동작을 비활성화
    - `defaultPrevented`를 `true`로 설정한다.
    - submit의 기본 동작(새로고침)을 비활성화 하기 위해 이 function을 호출
*/

const hiddenClassName = "hidden";
const usernameKey = "username";

function showGreetings(username) {
  /*  [ String interpolation ]
      - backtick으로 감싸야 함
      - 병합하려는 값을 ${} 안에 사용
   */
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(hiddenClassName);
}

function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;
  loginForm.classList.add(hiddenClassName);
  showGreetings(username);

  /* Local storage로 저장 */
  localStorage.setItem(usernameKey, username);
}

/*  [ Local Storage ]
    - 어떤 값을 브라우저에 저장해 두고 재사용함
    - 새로고침해도 storage에 저장한 값은 삭제되지 않는다.
    - 브라우저가 기본으로 제공하는 `localStorage` 사용
    - setItem(key, value) : key-value 쌍으로 저장
    - getItem(key) : key로 value 가져옴
    - removeItem(key) : key로 value 삭제
*/
const savedUsername = localStorage.getItem(usernameKey);
if (savedUsername === null) {
  // Show login form and add event listener for submit
  loginForm.classList.remove(hiddenClassName);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  showGreetings(savedUsername);
}

/* - <a> element의 기본 동작인 link 이동을 막음 
   - Link를 클릭할 때는 MouseEvent를 반환하는데, 여기서 screenX,Y 값도 얻을 수 있다.
*/
// const link = document.querySelector("a");
// function onLinkClick(event) {
//   event.preventDefault();
//   console.log("Click");
// }
// link.addEventListener("click", onLinkClick);

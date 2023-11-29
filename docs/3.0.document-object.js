/*  [ Document Object ]
    - document : 브라우저에 기본으로 존재하는 현재 page의 HTML을 가리키는 object
    - Document를 JavaScript 관점에서 볼 수 있게 해 준다. -> Object로 바꿔서 반환함
    - HTML에서 `<script>`로 js file을 import했기 때문에 document로 가져올 수 있는 것
    - Document로부터 HTML element를 읽어오거나, element를 추가하고 값을 변경할 수 있다.
        - read : `document.title;`
        - write : `document.title = "Title";`
    - title, head, body 같은 중요한 element만 document에서 직접 접근할 수 있게 되어 있음
    
    [ Element 가져오기 ]
    - getElementById() : id로 element를 가져오는 방법
    - getElementsByClassName() : class name으로 element를 가져오는 방법
    - getElementsByTagName() : tag name으로 element를 가져오는 방법
    - class name 및 tag는 여러 개 존재할 수 있으므로 element를 여러 개 반환
        - HTMLCollection type

    [ console.dir ]
    - `console.log`는 console에 단순히 값 출력
    - `console.dir`은 더 많은 정보를 보여줌 (Object로 접근할 수 있는 property들)
*/

// const title = document.getElementById("title");
// console.dir(title); // h1 tag
// console.dir(title.id); // "title"
// console.dir(title.className); // "hello"

// console.log(title.textContent); // "Grab me!"
// title.innerText = "Got you!";
// console.log(title.innerText); // "Got you!"
// console.log(title.outerText);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const h1s = document.getElementsByTagName("h1");
// console.log(h1s);

/*  [ Query Selector ]
    - element는 CSS selector를 사용해서 검색할 수 있음
    - BEM convention에 따라 개발한다면 id보다 class를 더 많이, 항상 사용할 것이므로
      일반적으로 `querySelector()`를 더 많이 사용하게 된다.
    - id를 사용해서 찾고 싶더라도 `querySelector`를 사용할 수 있다. 아래 두개는 같음.
        - getElementById("id")
        - querySelector("#id")
    - `getElement~` function보다 더 복잡한 조건으로 element를 가져올 수 있다.

    [ Usage ]
    1. querySelector(".hello h1")
        - "hello" class name을 가진 element의 내부에 h1 tag로 검색
        - 조건을 만족하는 결과가 여러개 있더라도, 첫 번째로 검색된 결과 1개만 반환된다.
    2. querySelectorAll(".hello h1:first-child")
        - Query 조건에 맞는 element를 모두 가져온다.
*/
const hello = document.querySelector(".hello h1");
console.log(hello);

const hellos = document.querySelectorAll(".hello h1");
console.log(hellos);

const lastHello = document.querySelector("#last-hello");
console.log(lastHello);
console.log(lastHello);

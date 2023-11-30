const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

/*  [ Form에 입력한 항목이 submit되면 list item으로 추가 ] */

/*  [ Local Storage에 Array 저장 ] 
    - Local storage에는 text만 저장할 수 있음
    - Array를 저장해도 itme들을 단순 문자열로 변환해서 저장
        - array: [1, 2, 3]
        - storage value : "1,2,3"
    - Local storage에 array 형태로 값을 저장하고 싶다면 encoding 필요

    [ JSON Encoding/Decoding ]
    - Array, object 등을 String으로 변환하거나, 각 형식의 String을 array 또는 object로 변환
    - `JSON.stringify(object)` : Encoding
        - array : ["a", "b", "c"]
        - encoded string : "[\"a\",\"b\",\"c\"]"
    - `JSON.parse(string)` : Decoding
*/
let toDos = [];
const TODOS_KEY = "todos";
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function getToDos() {
  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);

    /*  [ Function을 사용하는 다른 방법 ]
        - `forEach()`
            - Array의 각 item을 순회하며 function 실행
            - Function을 정의하거나, 직접 전달할 수 있음
                1. array.forEach(function (item) { console.log(item); })
                2. array.forEach(item => { console.log(item); })
                3. array.forEach(handleItemFunction)
        - Arrow function
            - 이름 없는 함수. 화살표(=>)를 사용해서 argument와 block을 구분함
            - (argument) => { console.log("asdf"); }
    */
    toDos = parsedToDos;
    parsedToDos.forEach((todo) => {
      paintToDo(todo);
    });
    // parsedToDos.forEach(paintToDo);
  }
}

function deleteToDo(event) {
  /*  [ Button click event 발생 시 해당 list item 찾기 ]
      1. event.target : 어떤 element에서 발생한 event인지
      2. parentNode : 상위 element 반환
      3. childNodes(NodeList type) / children(HTMLCollection type) : 하위 element들 반환
  */
  const toDoItem = event.target.parentNode;
  toDoItem.remove(); // HTML에서 element 삭제

  /* [ 삭제한 item을 local storage에서도 삭제 ]
     - filter : array를 순회하며 condition이 true인 item으로 새로운 array를 만들어서 반환
     - toDoItem.remove()
        - HTML에서 제거된 것이지 이 scope에서 instance는 유지되고 있음
        - remove() 호출 뒤에도 toDoItem.id로 접근할 수 있다.
  */
  toDos = toDos.filter((item) => item.id !== parseInt(toDoItem.id));
  saveToDos();
}

function paintToDo(newToDoObject) {
  const span = document.createElement("span");
  span.innerText = newToDoObject.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  const toDoItem = document.createElement("li");
  toDoItem.id = newToDoObject.id;

  toDoItem.appendChild(span);
  toDoItem.appendChild(button);
  toDoList.appendChild(toDoItem);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObject = {
    id: Date.now(), // Current date represented by milliseconds since standard time
    text: newToDo,
  };
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
getToDos();

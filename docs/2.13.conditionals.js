/*  [ prompt ]
    - Browser가 입력 받는 alert을 띄우고, 사용자가 입력한 결과를 반환함. (cancel을 누르면 null)
    - 오래된 function이므로 실제로는 잘 사용하지 않음. 실제로는 직접 modal을 만들어서 사용함
        - JavaScript를 멈추게 하고, 
        - CSS를 적용할 수 없고
        - 일부 브라우저에선 이 기능을 막기도 할 수 있음

    [ typeof ]
    - 값을 실제 타입을 반환
    - Usage
        typeof 12
        - typeof(12)
    - 브라우저 console에서는 string은 흰색이고 number는 색을 입혀서 보여줌

    [ parseInt ]
    - Convert string to int
    - Number를 사용하면 int type 값으로 반환
    - 숫자가 아닌 string을 전달하면 'NaN' 반환
    - Float number를 사용하면 소수점을 버린 int type 값으로 반환
    
    [ isNaN ]
    - `isNaN()` : 값이 `NaN` type인지 반환
*/
const age = prompt("How old are you?");
console.log(typeof age, typeof parseInt(age));

/*  [ Conditionals ]
    - condition with bool type
    - `if-else`
        - `if` : 조건을 만족하는 경우 실행
        - `else if` : 바로 위 조건을 만족하지 않았을 떄 다른 조건 검사
        - `else` : 위의 조건들을 모두 만족하지 않는 경우 실행
*/

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else {
  console.log("You can't drink");
}

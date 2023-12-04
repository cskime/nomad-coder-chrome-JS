/*  [ JavaScript ]
    - 브라우저는 js file을 위에서부터 순서대로 실행함
    - console.log() : 값을 브라우저의 console에 출력함
*/
console.log(5);
console.log("hi");
console.log(" ");

/*  [ Variable ]
    - 반복되는 값을 재사용하고 쉽게 변경할 수 있다.
    - 값을 저장해 두고 나중에 사용한다.
    - 변수 이름은 camel case를 따른다.
    - const : 상수
    - let : 변수
    - var (not recommended)
        - ES6 이전 문법
        - Block을 넘나들며 재선언이 가능해서 문제가 있었고, block scope 안에서만 사용될 수 있는 let으로 개선됨
    - const는 값을 바꾸면 안되는 변수를 실수로 값을 변경하지 않도록 막을 수 있다는 장점
    - const를 기본으로 사용하고, 값을 변경할 필요가 있을 때 let으로 바꾸는 편
*/
const a = 5;
const b = 2;
let myName = "cskime"
// a = 3;  // x. const 값은 변경할 수 없음

console.log(a + b);
console.log(a * b);
console.log(a / b);

myName = "joey"
console.log("your new name is " + myName);
console.log(" ");

/*  [ Data Type ]
    - JavaScript는 값을 보고 type을 유추함
    - JavaScript는 type-safe 하지 않다. 
        - e.g. 1 + 2.5 -> 3.5 (integer와 float 계산 가능)

    [ Data type 종류 ]
    - int : integer (e.g. 1)
    - float : decimal (e.g. 2.5)
    - string : text (e.g. "Hello" or 'Hello')
    - bool : boolean (true or false)
    - NaN : Not a Number
    - null
        - there's nothing there
        - 값이 들어있긴 함. 'null'이라는 값.
    - undefined
        - variable을 만들었지만 값은 주지 않음. 
        - 메모리는 차지하고 있지만 값이 들어있지 않음
    - 'null' vs 'undefined'
        - '값이 있지만 'null'인 것' vs '값이 아예 없는 것'
        - 선언했는데 값을 할당하지 않는 경우와 실제로 값이 없는 경우를 구분하기 위해 사용된다.
        - 둘 다 값이 없는 상태를 나타내는 원시 타입으로, `false`로 사용된다.
        - null check할 때 `a == null` 또는 `a == undefined`로 둘 다 체크할 수 있다.
*/

const integerValue = 1;
const floatValue = 1.5;
console.log(integerValue + floatValue);

const booleanValue = true;
console.log(booleanValue)

const nullValue = null;
console.log(nullValue);

let undefinedValue;
console.log(undefinedValue);
let undefinedValue2 = undefined;
console.log(undefinedValue2);

console.log(" ");
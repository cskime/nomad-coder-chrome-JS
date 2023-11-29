/*  [ Functions ]
    - 같은 코드를 여러 곳에서 반복해서 작성하지 않고 재사용하기 위한 방법
    - e.g. console.log();
    - () : Function executer
    - () 안에 argument를 전달, function 안에서 사용할 수 있음
    - argument는 타입 없이 이름만 쓰고 여러 개를 콤마로 구분해서 나열

    [ Return value ]
    - function 안에서 실행된 연산의 결과를 function 밖으로 알려준다.
    - `return` keyword를 사용해서 연산 결과를 function 밖으로 반환 반환
    - Function 안에서 구체적인 동작을 정의하지 않고, 동작에 필요한 값만 계산하고 구체적 동작은 외부에서 하도록 만든다.
*/

function sayHello(name, age) {
    console.log("Hello my name is " + name + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 20);
sayHello("lynn", 30);

function plus(a, b) {
    console.log(a + b);
}
function divide(a, b) {
    /* JS는 integer끼리 나누어 떨어지지 않을 때 floating number로 반환 */
    console.log(a / b);
}
plus(1, 2);
divide(4, 2);

function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 1;
}
const krAge = calculateKrAge(10);
console.log("Korean age is ", krAge);

/*  [ Objects ]
    - Data를 attribute 별로 구조화하는 방법
    - Array를 사용해도 되지만 각 element가 어떤 것을 의미하는지 표현하기 어려움
    - const object = { property: value; }; 형태 (중괄호 사용)
    - property: function() {} 형태로 작성

    [ Property 및 Function 선언 ]
    const object = {
        property: value,
        functionName: function(arg1, arg2) {
            console.log(arg1, arg2);
        }
    };

    [ Read property value ]
    1. Object로부터 점(`.`)으로 접근
    2. 대괄호(`[]`)에 property name을 넣어서 접근

    [ Change object ]
    - Object를 const로 선언해도 내부 property 값은 변경할 수 있음
    - 존재하지 않는 property에 값을 할당하면, object에 새 property가 추가됨
*/

const player = {
    name: "nico",
    points: 121212,
    isHandsome: true,
    sayHello: function(name) {
        console.log("Hello " + name);
    }
};
console.log(player);
console.log(player.name);
console.log(player["points"]);
console.log(player.isHandsome);

player.fat = false;
console.log(player);

player.sayHello("nico");
player.sayHello("lynn");

console.log(" ");

/*  [ Calculator 만들기 ]
    - plus, minus, divide, times, power
*/
let calculator = {
    plus: function(a, b) { return a + b; },
    minus: function(a, b) { return a - b; },
    times: function(a, b) { return a * b; },
    divide: function(a, b) { return a / b; },
    power: function(a, b) { return a ** b; }
}

console.log(calculator.plus(4, 2));
console.log(calculator.minus(4, 2));
console.log(calculator.times(4, 2));
console.log(calculator.divide(4, 2));
console.log(calculator.power(4, 2));
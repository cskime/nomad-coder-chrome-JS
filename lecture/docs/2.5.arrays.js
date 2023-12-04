/*  [ Array ]
    - Data를 선형으로 묶어서 저장하는 자료구조 (Groupping)
    - 대괄호(`[ ]`)에 값들을 나열한다.
    - Array에는 다른 type인 값들을 저장할 수 있다. -> non type safe

    [ Accessing data ]
    - index : array에서 element의 위치를 나타냄 (start from 0)
    - 대괄호(`[ ]`)에 index를 넣는다. 
    - index 범위를 넘어가도 error를 발생시키지 않고 'undefined'를 반환함

    [ Modifying array ]
    - add : push() function 사용
*/
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeeks = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeeks);
console.log(daysOfWeeks[5]);

daysOfWeeks.push("sun")
console.log(daysOfWeeks);

const nonsense = [1, 2, "hello", false, null, true, undefined];
console.log(nonsense);

console.log(" ");
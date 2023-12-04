const clock = document.querySelector("h2#clock");

/*  [ Interval ]
    - `setInterval(handler, interval)` : 매 interval마다 handler를 실행시킴
    - JavaScript 내장 함수
    
    [ Timeout ]
    - `setTimeout(handler, delay)` : delay만큼 기다렸다가 handler를 1번 실행시킴

    [ Date Object ]
    - `Date` : JavaScript 내장 날짜 class
    - 현재 날짜, 시간(시, 분, 초) 정보를 가지고 있음
    - Instance 생성 : new Date();
    - getDate, getDay, getHours, getMinutes, getSeconds 등 method를 사용해서 날짜 및 시간 정보를 가져옴

    [ Text Formatting ]
    - padStart(maxLength, fillString) : string이 고정된 자리수를 갖게 함
    - string 길이가 maxLength보다 작을 경우 앞에서부터 fillString으로 채움

    [ Convert number into a String ]
    1. String(number)
    2. toString()
*/
function padZeroUpToTwoDigit(number) {
  return String(number).padStart(2, "0");
}
function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0"); // number.toString() 사용
  const minutes = String(date.getMinutes()).padStart(2, "0"); // String(number) 사용
  const seconds = padZeroUpToTwoDigit(date.getSeconds()); // 재사용 function으로 추출
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

const quotes = [
  {
    quote: "You are the shuckiest shuck faced shuck in the world!",
    author: "James Dashner",
  },
  {
    quote: "Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!",
    author: "Rick Riordan",
  },
  {
    quote: "Insane means fewer cameras!",
    author: "Ally Carter",
  },
  {
    quote: "I'm about as intimidating as a butterfly.",
    author: "Dan Howell",
  },
  {
    quote: "Some quotations are greatly improved by lack of context.",
    author: "John Wyndham",
  },
  {
    quote:
      "Never ask an elf for help; they might decide your better off dead, eh?",
    author: "Christopher Paolini",
  },
  {
    quote: "What's my age again?",
    author: "Blink-182",
  },
  {
    quote:
      "All of my best friends are dead people. Someday I've got to figure out how that happened.",
    author: "Claudia Gray",
  },
  {
    quote: "Act first, explain later.",
    author: "Dan Brown",
  },
  {
    quote: "Hand me my pants,",
    author: "Michael Grant",
  },
  {
    quote:
      "Life would be a great deal easier if dead things had the decency to remain dead.",
    author: "Doug MacLeod",
  },
];

/*  [ Math ] 
    - PI, radomness 등 수학적 계산 및 필요한 값들을 제공하는 API
    - JavaScript 내장 API
    - random() : 0 ~ 1 사이 숫자 제공
    - round() : 반올림 연산
    - ceil() : 올림 연산 (천장(ceil)으로)
    - floor() : 버림 연산 (바닥(floor)으로)
*/

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

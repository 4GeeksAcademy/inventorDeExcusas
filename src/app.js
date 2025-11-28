import "bootstrap";
import "./style.css";


import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when i was sleeping", "while i was exercising", "during my lunch", "while i was praying"];

const generateExcuse = () => {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randoAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randoAction} ${randomWhat} ${randomWhen}`;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
}

document.getElementById("reloadBtn").addEventListener("click", function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
})
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let score_area = document.getElementById('score');
let num1_area = document.getElementById('num1');
let num2_area = document.getElementById('num2');
const input = document.getElementById('input');
let btn = document.getElementById('btn');
const correctAnswer = num1 * num2;
num1_area.innerHTML = num1;
num2_area.innerHTML = num2;
let score = JSON.parse(localStorage.getItem("score"));
if (score < 0){
    score = 0;
}
btn.onclick = function(){
location.reload()
  if(input.value == correctAnswer){
    score++
    localStorage.setItem("score",JSON.stringify(score))
  }else {
    score--
    localStorage.setItem("score", JSON.stringify(score))
  }
}
score_area.innerHTML = score;
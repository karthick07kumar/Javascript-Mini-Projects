const myButton = document.getElementById("myButton");
const label1 = document.getElementById("lab");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum;
// let randomNum2;
// let randomNum3;

function add(){
 randomNum = Math.floor(Math.random()*max)+min;
 label1.textContent=randomNum;
}

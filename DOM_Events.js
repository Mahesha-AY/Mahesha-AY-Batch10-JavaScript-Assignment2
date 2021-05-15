var btn=document.querySelector(".click");
btn.addEventListener("click",function(){
    alert("you clicked on a onClick button")
});

document.getElementById("mouse").addEventListener("mouseover",mouseOver);


function mouseOver(){
    document.getElementById("mouse").style.color="gold";
}

document.getElementById("mouse").addEventListener("mouseout",mouseOut);

function mouseOut(){
    document.getElementById("mouse").style.color="green";
}

var input = document.querySelector(".inp");
var para = document.querySelector(".out");

input.addEventListener("keyup", function () {
  paragraph.innerText = input.value;
});

input.addEventListener("keydown", function myFunction() {
  alert("You Entered a data");
});
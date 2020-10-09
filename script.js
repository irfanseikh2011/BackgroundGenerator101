var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var currentStyle = document.getElementById("customBG");
var body = document.getElementById("gradient");


function colorChange(){
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value + ")";
    currentStyle.textContent = body.style.background;


}

colorChange();

color1.addEventListener("input", colorChange);
color2.addEventListener("input",colorChange);

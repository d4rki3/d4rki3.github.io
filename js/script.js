var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font = "25px Verdana";
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "green");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("Desenvolvedor G33k", 10, 80);

ctx.font = "20px Georgia";
ctx.fillText("+55 12 996003513", 55, 115);

ctx.font = "20px Georgia";
ctx.fillText("D4rki3 - Jarson Santos", 45, 40);

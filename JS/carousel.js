var dot = document.getElementsByClassName("dot");
var slides = document.getElementById('slides');

dot[0].onclick = function () { slides.style.transform = "translateX(0px)" };
dot[1].onclick = function () { slides.style.transform = "translateX(-800px)" };
dot[2].onclick = function () { slides.style.transform = "translateX(-1600px)" };
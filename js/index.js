// Set SVG image width
const imgWidth = document.getElementById("img").offsetWidth;
const svg = document.getElementById("undraw_town_r6pc");

function setWidth() {
  svg.style.width = imgWidth + "px";
}

setWidth();

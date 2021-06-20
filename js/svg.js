// ! Set SVG image width

const svg = document.getElementById("undraw_town_r6pc");

function setWidth() {
  const imgWidth = document.getElementById("img").offsetWidth;
  svg.style.width = imgWidth + "px";
}

window.onload = setWidth;
window.addEventListener("resize", setWidth);

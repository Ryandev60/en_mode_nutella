const main = document.getElementById("main");

const yellowBlock = document.getElementById("yellowBlock");
const redBlock = document.getElementById("redBlock");
const blueBlock = document.getElementById("blueBlock");

const sr = ScrollReveal();
sr.reveal("#yellowBlock");
sr.reveal("#redBlock");
sr.reveal("#blueBlock");

var parallaxInstance = new Parallax(main);

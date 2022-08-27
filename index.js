//DOM

const main = document.getElementById("main");
const topNav = document.getElementById("topNav");
const yellowBlock = document.getElementById("yellowBlock");
const redBlock = document.getElementById("redBlock");
const blueBlock = document.getElementById("blueBlock");
const textNavTop = document.querySelectorAll(".nav__top .nav__text");
const textNavBottom = document.querySelectorAll(".nav__bottom .nav__text");
const menuBurger = document.getElementById("burger");
const listBurger = document.getElementById("listBurger");
const closeBurger = document.getElementById("closeBurger");

//On off

let isOpen = false;

// Color

const white = "#ffff";
const red = "#f90000";
const darkRed = "#d20000";

//ScrollReveal effect

const sr = ScrollReveal();
sr.reveal("#yellowBlock", {
  delay: 500,
});
sr.reveal("#redBlock", {
  delay: 500,
});
sr.reveal("#blueBlock", {
  delay: 500,
});

// Parallax effect

var parallaxInstance = new Parallax(main);

// Color while mouseover on textNavTop

textNavTop.forEach((e) => {
  e.addEventListener("mouseover", () => {
    console.log("first");
    textNavTop[0].style.backgroundColor = red;
  });

  e.addEventListener("mouseout", () => {
    console.log("first");
    textNavTop[0].style.backgroundColor = darkRed;
  });
});

// Color while mouseover on textNavBottom

textNavBottom.forEach((e) => {
  e.addEventListener("mouseover", () => {
    console.log("first");
    textNavBottom[1].style.backgroundColor = white;
    textNavBottom[1].style.color = red;
  });

  e.addEventListener("mouseout", () => {
    console.log("first");
    textNavBottom[1].style.backgroundColor = red;
    textNavBottom[1].style.color = white;
  });
});

menuBurger.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen === true) {
    listBurger.style.display = "flex";
    topNav.style.borderBottomLeftRadius = "0";
    topNav.style.borderBottomRightRadius = "0";
  } else {
    listBurger.style.display = "none";
    topNav.style.borderBottomLeftRadius = "40px";
    topNav.style.borderBottomRightRadius = "40px";
  }
});

const positionBlock = main.offsetTop;
console.log(positionBlock);

document.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);

  console.log(scrollValue);
  if (scrollValue > 0.37) {
    main.style.transform = "scale(1)";
  }
});

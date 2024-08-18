//global variables
const pick = document.getElementsByClassName("picks")[0];
const pop = document.getElementsByClassName("popular")[0];
const nos = document.getElementsByClassName("nostalgic")[0];
const ani = document.getElementsByClassName("animation")[0];
const topElements = document.querySelectorAll("#top img");
const popElements = document.querySelectorAll("#pop img");
const nosElements = document.querySelectorAll("#nos img");
const aniElements = document.querySelectorAll("#ani img");
const scrollButtons = document.querySelectorAll("slide-button");
const rightButtons = document.querySelectorAll("button.right");
const leftButtons = document.querySelectorAll("button.left");
const topSlide = document.getElementById("top");
const popSlide = document.getElementById("pop");
const nosSlide = document.getElementById("nos");
const aniSlide = document.getElementById("ani");
const slides = [topSlide, popSlide, nosSlide, aniSlide];

//to add the style tag for the scroll styling
const styleTag = document.createElement("style");
document.head.appendChild(styleTag);

// scroll button controls
function scrollLeft() {
  let targetSlide = slides.find((slide) => {
    return window.getComputedStyle(slide).overflowX === "scroll";
  });
  targetSlide.scrollBy(-200, 0);
}
function scrollRight() {
  let targetSlide = slides.find((slide) => {
    return window.getComputedStyle(slide).overflowX === "scroll";
  });
  targetSlide.scrollBy(200, 0);
}

function addListenerForRight() {
  let targetButton = Array.from(rightButtons).find((button) => {
    return window.getComputedStyle(button).display === "block";
  });
  if (targetButton) targetButton.addEventListener("click", scrollRight);
}

function addListenerForLeft() {
  let targetButton = Array.from(leftButtons).find((button) => {
    return window.getComputedStyle(button).display === "block";
  });
  if (targetButton) targetButton.addEventListener("click", scrollLeft);
}

// display and hide scrollar and buttons
function displayScrollbar(element) {
  let scrollStyle = `#${element}{
overflow-x: scroll;
}
#${element} .slide-button{
    display: block
    }`;
  styleTag.textContent = scrollStyle;

  addListenerForLeft();
  addListenerForRight();
}
function hideScrollbar() {
  styleTag.textContent = "";
}

// Adding event listeners to the elements
pick.addEventListener("mouseover", () => {
  displayScrollbar("top");
});
pop.addEventListener("mouseover", () => {
  displayScrollbar("pop");
});
nos.addEventListener("mouseover", () => {
  displayScrollbar("nos");
});
ani.addEventListener("mouseover", () => {
  displayScrollbar("ani");
});

pick.addEventListener("scroll", () => {
  displayScrollbar("top");
});
pop.addEventListener("scroll", () => {
  displayScrollbar("pop");
});
nos.addEventListener("scroll", () => {
  displayScrollbar("nos");
});
ani.addEventListener("scroll", () => {
  displayScrollbar("ani");
});

pick.addEventListener("mouseleave", () => {
  setTimeout(hideScrollbar, 3000);
});
pop.addEventListener("mouseleave", () => {
  setTimeout(hideScrollbar, 3000);
});
nos.addEventListener("mouseleave", () => {
  setTimeout(hideScrollbar, 3000);
});
ani.addEventListener("mouseleave", () => {
  setTimeout(hideScrollbar, 3000);
});

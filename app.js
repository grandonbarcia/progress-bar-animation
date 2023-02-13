const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

function animateProgressBar() {
  let scrollDistance = -section.getBoundingClientRect().top;
  let progressWidth =
    (scrollDistance /
      (document.documentElement.clientHeight -
        section.getBoundingClientRect().height)) *
    10;

  let value = Math.floor(progressWidth);
  progressBar.style.width = value + "%";
  console.log(value);
}

window.addEventListener("scroll", animateProgressBar);
console.log(document.documentElement.clientHeight);
console.log(section.getBoundingClientRect().height);
console.log(section.getBoundingClientRect().top);

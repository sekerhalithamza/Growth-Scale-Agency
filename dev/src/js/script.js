"use strict";

const header = document.getElementById("header");
const firstElement = document.getElementsByClassName("first-element")[0];
const progressCircles = document.getElementsByClassName("progress-circle");

window.onscroll = () => {
  if (
    header.getBoundingClientRect().height < window.scrollY &&
    firstElement.getBoundingClientRect().height - header.getBoundingClientRect().height >
      window.scrollY
  ) {
    header.classList.remove("closed");
    header.classList.add("middle");
  } else if (
    firstElement.getBoundingClientRect().height - header.getBoundingClientRect().height <
    window.scrollY
  ) {
    header.classList.add("closed");
    header.classList.remove("middle");
  } else {
    header.classList.remove("closed");
    header.classList.remove("middle");
  }

  for (const element of progressCircles) {
    if (element.getBoundingClientRect().bottom + 10 < window.innerHeight) {
      element.classList.add("active");
    }
  }
};

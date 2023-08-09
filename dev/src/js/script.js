"use strict";

const header = document.getElementById("header");
const firstElement = document.getElementsByClassName("first-element")[0];

console.log(window.scrollY);

console.log(header.getBoundingClientRect().height);

console.log(firstElement.getBoundingClientRect().bottom);

const headerAnimation = setInterval(() => {
  if (
    header.getBoundingClientRect().height < window.scrollY &&
    firstElement.getBoundingClientRect().bottom > window.scrollY
  ) {
    header.classList.remove("closed");
    header.classList.add("middle");
  } else if (firstElement.getBoundingClientRect().bottom < window.scrollY) {
    header.classList.add("closed");
    header.classList.remove("middle");
  } else {
    header.classList.remove("closed");
    header.classList.remove("middle");
  }
}, 100);

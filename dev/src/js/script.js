"use strict";

const header = document.getElementById("header");
const firstElement = document.getElementsByClassName("first-element")[0];
const progressCircles = document.getElementsByClassName("progress-circle");
const chevronBtns = document.getElementsByClassName("section-testimonials__wrapper-btn");
const testimonialsContainers = document.getElementsByClassName(
  "section-testimonials__wrapper-container"
);

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

var position = 0;

chevronBtns[0].addEventListener("click", () => {
  console.log("click");
  if (position > 0) {
    position--;
    for (const container of testimonialsContainers) {
      container.style.transform = `translateX(calc(${position} * -24vw))`;
    }
  } else {
    position = 1;
    for (const container of testimonialsContainers) {
      container.style.transform = `translateX(calc(${position} * -24vw))`;
    }
  }
});

chevronBtns[1].addEventListener("click", () => {
  if (position < 1) {
    position++;
    for (const container of testimonialsContainers) {
      container.style.transform = `translateX(calc(${position} * -24vw))`;
    }
  } else {
    position = 0;
    for (const container of testimonialsContainers) {
      container.style.transform = `translateX(calc(${position} * -24vw))`;
    }
  }
});

/*

setInterval(() => {
  chevronBtns[1].click();
}, 5000);

*/

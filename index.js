"use strict";

/*=================================================
    HAMBURGER MENU
===================================================*/
function hamburgerMenu() {
  let navBar = document.querySelector("#navi");
  let hamburgerBtn = document.querySelector(".hamburger");

  if (
    !(
      navBar.classList.contains("active") &&
      hamburgerBtn.classList.contains("active")
    )
  ) {
    navBar.classList.add("active");
    hamburgerBtn.classList.add("active");
  } else {
    navBar.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }
}

/*=================================================
    SWITCHING IMAGES
===================================================*/
let mainImgs = [
  "../online-schoolmainvisual1.jpg",
  "../online-schoolmainvisual2.jpg",
  "../online-schoolmainvisual3.jpg",
];
let count = -1;
slideShow_timer();

function slideShow_timer() {
  let slidePic = document.querySelector(".slidePic");

  count++;
  if (count == mainImgs.length) count = 0;
  slidePic.src = mainImgs[count];
  setTimeout("slideShow_timer()", 4000);
}

/*=================================================
    SLIDE IN FROM SIDE
===================================================*/

// TARGET ELEMENTS
let reasons = document.querySelectorAll(".reason");

// EXECUTING SCROLL EVENTS
window.addEventListener("scroll", function () {
  let scroll = window.scrollY; // Get the scroll area
  let windowHeight = window.innerHeight;
  for (let reason of reasons) {
    let targetPos = reason.getBoundingClientRect().top + scroll;
    if (scroll > targetPos - windowHeight) {
      if (reason.classList.contains("second")) {
        reason.classList.add("show-reverse");
      } else {
        reason.classList.add("show");
      }
    }
  }
});

/*=================================================
    ANIMATION BALLOON
===================================================*/

let reviews = document.querySelectorAll(".reviews");

window.addEventListener("scroll", function () {
  let scroll = window.scrollY; // Get the scroll area
  let windowHeight = window.innerHeight;
  for (let review of reviews) {
    let targetPos = review.getBoundingClientRect().top + scroll;
    if (scroll > targetPos - windowHeight) {
      if (!review.classList.contains("zoom-in")) {
        review.classList.add("zoom-in");
      }
    }
  }
});

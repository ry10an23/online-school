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
let mainImgs = new Array(
  "../online-school/mainvisual1.jpg",
  "../online-school/mainvisual2.jpg",
  "../online-school/mainvisual3.jpg"
);
let count = -1;
slideShow_timer();

function slideShow_timer() {
  if (count == 2) {
    count = 0;
  } else {
    count++;
  }
  document.querySelector(".slidePic").src = /mainImgs[count];
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

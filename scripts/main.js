// Show loading icon until page loads

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

// typewriter effect on loop

var messages = [
  "I love to build things.",
  "Have a good look around.",
  "Hi there. Welcome to my portfolio.",
];
var rank = 0;

// Code for Chrome, Safari and Opera
document
  .getElementById("typewriter")
  .addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document
  .getElementById("typewriter")
  .addEventListener("animationend", changeTxt);

function changeTxt(e) {
  _h1 = this.getElementsByTagName("h1")[0];
  _h1.style.webkitAnimation = "none"; // set element animation to none
  setTimeout(function () {
    // for delay before the next message appears
    _h1.innerHTML = messages[rank];
    var speed = 3.5; // adjust the speed (3.5 is the original speed, 20 is the original string length
    _h1.style.webkitAnimation =
      "typing " + speed + "s steps(30, end), blink-caret .5s step-end infinite"; //  switch to the original set of animation
    rank === messages.length - 1 ? (rank = 0) : rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
  }, 1000);
}

let scrollLock = false;

function getWindowSize() {
  var width = document.documentElement.clientWidth;
  if (width > 900) {
    scrollAllowed = true;
  } else {
    scrollAllowed = false;
  }
}

window.addEventListener("resize", getWindowSize);

getWindowSize();

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (scrollAllowed) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
  }
  else {
    document.getElementById("navbar").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

/* toggle navigation bar when clicked on burger. Close the navigation bar if opened by clicking anywhere. */
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const span = document.querySelector(".hide-navbar");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.8
          }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });

  span.addEventListener("click", () => {
    nav.classList.toggle("nav-active", false);
    navLinks.forEach((link, index) => {
      link.style.animation = ``;
    });

    //Burger Animation
    burger.classList.toggle("toggle", false);
  });
};

$(".js--wp-1").waypoint(
  function (direction) {
    $(".js--wp-1").addClass("animate__animated animate__fadeInLeft");
    $(".js--wp-1").removeClass("hidden");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-2").waypoint(
  function (direction) {
    $(".js--wp-2").addClass("animate__animated animate__fadeInRight");
    $(".js--wp-2").removeClass("hidden");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-3").waypoint(
  function (direction) {
    $(".js--wp-3").addClass("animate__animated animate__zoomIn");
    $(".js--wp-3").removeClass("hidden");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-4").waypoint(
  function (direction) {
    $(".js--wp-4").addClass("animate__animated animate__flipInX");
    $(".js--wp-4").removeClass("hidden");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-5-1").waypoint(
  function (direction) {
    $(".js--wp-5-1").addClass("animate__animated animate__slideInLeft");
    $(".js--wp-5-1").removeClass("hidden");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-5-2").waypoint(
  function (direction) {
    $(".js--wp-5-2").addClass("animate__animated animate__slideInRight");
    $(".js--wp-5-2").removeClass("hidden");
  },
  {
    offset: "35%",
  }
);

navSlide();

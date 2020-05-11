/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ``;
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
      }

    });

    //Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();

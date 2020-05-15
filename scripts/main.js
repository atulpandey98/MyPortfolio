// Show loading icon until page loads

document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector(".loader").style.visibility = "visible"; 
  } else { 
      document.querySelector(".loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible"; 
  } 
}; 


// typewriter effect on loop

var messages=["I am a Full Stack Developer.","Currently, a final year student.","Hi there. Welcome to my portfolio."];
var rank=0;

// Code for Chrome, Safari and Opera
document.getElementById("typewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("typewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h1 = this.getElementsByTagName("h1")[0];
  _h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h1.innerHTML=messages[rank];
      var speed =3.5; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h1.style.webkitAnimation = 'typing '+speed+'s steps(30, end), blink-caret .5s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
} 

/* toggle navigation bar when clicked on burger. Close the navigation bar if opened by clicking anywhere. */
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const span = document.querySelector('.hide-navbar');  

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

  span.addEventListener('click', () => {
    nav.classList.toggle('nav-active',false);
    navLinks.forEach((link, index) => {        
        link.style.animation = ``;        
    });

    //Burger Animation
    burger.classList.toggle('toggle',false);  
  });
}

navSlide();

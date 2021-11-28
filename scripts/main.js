// Menu on mobile and tablet
const openMenu = document.querySelector(".open__nav");
const closeMenu = document.querySelector(".close__nav");
const menu = document.querySelector(".cover");
const outsideNav = document.querySelector(".cover__overlay");

const toggleNav = (menu) => {
  if (menu.classList.contains("out_of_frame")) {
    menu.classList.remove("out_of_frame");
  } else {
    menu.classList.add("out_of_frame");
  }
};

openMenu.addEventListener("click", (e) => {
  toggleNav(menu);
});

closeMenu.addEventListener("click", (e) => {
  toggleNav(menu);
});

outsideNav.addEventListener("click", (e) => {
  toggleNav(menu);
});


// Slideshow - Glide.js
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  focusAt: 'center',
  autoplay: 3000,
  hoverpause: true,
  animationDuration: 800,
  breakpoints: {
    1024: {
      perView: 2
    },
    800: {
      perView: 1
    }
  }
}).mount()



// Animation JS
var slideUp = {
  distance: '400%',
  origin: 'bottom',
  opacity: null,
  delay: 400,
  duration: 800,
  easing: 'ease'
};
var slideRight = {
  distance: '150%',
  origin: 'right',
  opacity: null,
  delay: 300,
  duration: 600,
  reset: true,
  easing: 'ease'
};
var slideLeft = {
  distance: '150%',
  origin: 'left',
  opacity: null,
  delay: 300,
  duration: 600,
  reset: true,
  easing: 'ease'
};

// ScrollReveal().reveal('.card', slideUp);
ScrollReveal().reveal('.me_pic', slideRight);
ScrollReveal().reveal('.me_text', slideLeft);

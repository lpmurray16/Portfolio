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

var slideUp = {
  distance: '150%',
  origin: 'bottom',
  opacity: null,
  delay: 300,
  duration: 500,
  easing: 'ease'
};
var slideRight = {
  distance: '100%',
  origin: 'right',
  opacity: null,
  delay: 300,
  duration: 500,
  reset: true,
  easing: 'ease'
};
var slideLeft = {
  distance: '100%',
  origin: 'left',
  opacity: null,
  delay: 300,
  duration: 500,
  reset: true,
  easing: 'ease'
};

ScrollReveal().reveal('.card', slideUp);
ScrollReveal().reveal('.me_pic', slideRight);
ScrollReveal().reveal('.me_text', slideLeft);

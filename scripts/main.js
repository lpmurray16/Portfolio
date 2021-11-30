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
  gap: 20,
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


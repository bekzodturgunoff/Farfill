const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-toggle-close");
const navLinks = document.querySelector(".links");

const onMenuOpen = () => {
  navLinks.classList.add("active");
  navClose.classList.add("active");
};

const onMenuClose = () => {
  navLinks.classList.remove("active");
  navClose.classList.remove("active");
};

navToggle.addEventListener("click", onMenuOpen);

navClose.addEventListener("click", onMenuClose);

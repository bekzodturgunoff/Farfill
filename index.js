const hamBtn = document.querySelector(".header-hamburger");
const closeBtn = document.querySelector(".header-close");
const nav = document.querySelector(".nav");

const onMenuOpen = () => {
  nav.classList.add("active");
  closeBtn.classList.add("active");
  document.body.classList.add("no-scroll");
};

const onMenuClose = () => {
  nav.classList.remove("active");
  closeBtn.classList.remove("active");
  document.body.classList.remove("no-scroll");
};

hamBtn.addEventListener("click", onMenuOpen);

closeBtn.addEventListener("click", onMenuClose);

const menuIcon = document.querySelector(".mobile-nav__icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close__button");

menuIcon.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// Mobile Menu
const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  if (menu.classList.contains("hidden__mobile")) {
    menu.classList.remove("hidden__mobile");
  } else {
    menu.classList.add("hidden__mobile");
  }
});

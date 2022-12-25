
// *********************** **************** ******************
const drop = document.querySelector(".nav__drop");
const navList = document.querySelector(".nav__list");

drop.addEventListener("click", () => {
  drop.classList.toggle("active");
  navList.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  drop.classList.remove("active");
  navList.classList.remove("active");
});

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click"), () => {
  drop.classList.remove("active");
  navList.classList.remove("active");
});


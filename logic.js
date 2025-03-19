// burger menu view BURGER 001
const burger = document.querySelector(".burger");
let view = "true";
const menu = document.querySelector(".menu-01-cont");
burger.addEventListener("click", () => {
  if (view === "true") {
    menu.style.display = "block";
    burger.innerHTML = `<i class="fas fa-times"></i>`;
    view = "false";
  } else {
    menu.style.display = "none";
    burger.innerHTML = `<i class="fas
    fa-bars"></i>`;
    view = "true";
  }
});
// WHEN CLICK ON MENU OR SELECT MENU FROM BAR ITS GET CLOSE
document.querySelector(".menu-01-cont").addEventListener("click", () => {
  if (view === "false") {
    menu.style.display = "none";
    burger.innerHTML = `<i class="fas fa-bars"></i>`;
    view = "true";
  }
});

document.querySelector("main").addEventListener("click", () => {
  if (view === "false") {
    menu.style.display = "none";
    burger.innerHTML = `<i class="fas fa-bars"></i>`;
    view = "true";
  }
});

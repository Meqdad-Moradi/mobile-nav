const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");
const iEl = navToggle.querySelector("i");
const navListItems = document.querySelectorAll(".nav-list-item");

navToggle.addEventListener("click", (e) => {
  const expanded = navToggle.getAttribute("aria-expanded");

  if (expanded === "false") {
    navToggle.setAttribute("aria-expanded", true);
    nav.setAttribute("data-visible", true);
    iEl.className = "fas fa-times";
  } else if (expanded === "true") {
    resetNav();
  }
});

// Nav
nav.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  resetNav();
});

// HeaderList items
navListItems.forEach((list) => list.addEventListener("click", resetNav));

// reset nav
function resetNav() {
  navToggle.setAttribute("aria-expanded", false);
  nav.setAttribute("data-visible", false);
  iEl.className = "fas fa-bars";
}

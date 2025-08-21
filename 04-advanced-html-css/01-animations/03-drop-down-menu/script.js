const container = document.querySelector(".dropdown-container");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown-menu");

menu.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdown.classList.toggle("visible");
  }
})

window.addEventListener("click", (e) => {
  if (!container.contains(e.target)) {
    dropdown.classList.remove("visible")
  }
})

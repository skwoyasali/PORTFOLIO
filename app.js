// Select elements
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a");

// Toggle nav on menu button click
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Hide nav when a link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// Optional: Close nav if user clicks outside the menu
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove("show");
  }
});

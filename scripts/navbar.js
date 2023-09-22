let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos < currentScrollPos) {
    document.querySelector(".navbar").classList.remove("show");
    document.querySelector(".navbar").classList.add("hidden");
  } else {
    document.querySelector(".navbar").classList.add("show");
    document.querySelector(".navbar").classList.remove("hidden");
  }

  prevScrollPos = currentScrollPos;
});

const menuCheckbox = document.querySelector("#menu-checkbox");
const menu = document.querySelector("#menu")
const menuToggle = document.querySelector("#menu-toggle");

menuCheckbox.addEventListener("change", function () {
 if (this.checked) {
  setTimeout(() => {
  menu.style.display = "flex";
  menuToggle.style.width = "100vw";
  }, 0);
 } else {
  setTimeout(() => {
  menu.style.display = "none";
  menuToggle.style.width = "0";
  }, 500);
 }
})
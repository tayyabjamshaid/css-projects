let navLinks = document.getElementById("navLinks");
let close = document.getElementById("close");
let open = document.getElementById("open");
close.addEventListener("click", () => {
  navLinks.style.right = "-200px";
});

open.addEventListener("click", () => {
  navLinks.style.right = "0";
});

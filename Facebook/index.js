let settingsMenu = document.querySelector(".settings-menu");
let darkbtn = document.getElementById("dark-btn");
function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}
darkbtn.onclick = function () {
  darkbtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
};

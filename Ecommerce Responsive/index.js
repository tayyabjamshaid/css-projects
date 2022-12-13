let menuIcon = document.querySelector(".menu-icon");
let navUi = document.querySelector(".navUl");
navUi.style.maxHeight = "0px";

menuIcon.addEventListener("click", () => {
  if (navUi.style.maxHeight == "0px") {
    navUi.style.maxHeight = "200px";
  } else {
    navUi.style.maxHeight = "0px";
  }
});

/////////////////////////////////////////////////
//js for product gallery
let productImg = document.getElementById("product-img");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].addEventListener("click", () => {
  productImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click", () => {
  productImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click", () => {
  productImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click", () => {
  productImg.src = smallImg[3].src;
});

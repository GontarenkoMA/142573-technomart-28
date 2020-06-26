var addingCarts = document.querySelectorAll(".add-to-cart");
var addingBookmarks = document.querySelectorAll(".add-to-bookmarks");
var userCart = document.querySelector(".products-interaction-item-cart");
var userBookmarks = document.querySelector(".products-interaction-item-bookmarks");
var counterCart = document.querySelector(".counter-cart");
var counterBookmarks = document.querySelector(".counter-bookmarks");
var addingWindow = document.querySelector(".container-adding-window");
var addingClose = addingWindow.querySelector(".modal-close");
var addingCloseBackground = addingWindow.querySelector(".modal-close-background");
var continueShopping = addingWindow.querySelector(".continue-shopping-button");

addingCarts.forEach(function(el) {
  el.addEventListener("click", function(evt) {
    evt.preventDefault();
    userCart.classList.add("products-interaction-notempty");
    addingWindow.classList.add("modal-show");
    counterCart.innerHTML = (counterCart.innerHTML | 0) + 1;
  });
});

addingBookmarks.forEach(function(el) {
  el.addEventListener("click", function(evt) {
    evt.preventDefault();
    userBookmarks.classList.add("products-interaction-notempty");
    counterBookmarks.innerHTML = (counterBookmarks.innerHTML | 0) + 1;
  });
});

addingClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addingWindow.classList.remove("modal-show");
});

addingCloseBackground.addEventListener("click", function (evt) {
  evt.preventDefault();
  addingWindow.classList.remove("modal-show");
});

continueShopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  addingWindow.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addingWindow.classList.contains("modal-show")) {
      evt.preventDefault();
      addingWindow.classList.remove("modal-show");
    }
  }
});

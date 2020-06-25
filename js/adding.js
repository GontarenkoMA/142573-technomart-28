var pageBody = document.querySelector(".page-body");
var addingCarts = pageBody.querySelectorAll(".add-to-cart");
var addingBookmarks = pageBody.querySelectorAll(".add-to-bookmarks");
var userCart = pageBody.querySelector(".products-interaction-item-cart");
var userBookmarks = pageBody.querySelector(".products-interaction-item-bookmarks");
var counterCart = pageBody.querySelector(".counter-cart");
var counterBookmarks = pageBody.querySelector(".counter-bookmarks");
var addingWindow = pageBody.querySelector(".container-adding-window");
var addingClose = addingWindow.querySelector(".modal-close");
var addingCloseBackground = addingWindow.querySelector(".modal-close-background");
var continueShopping = addingWindow.querySelector(".continue-shopping-button");

for (let addingCart of addingCarts) {
  addingCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    userCart.classList.add("products-interaction-notempty");
    addingWindow.classList.add("modal-show");
    pageBody.classList.add("modal-background-noscroll");
    counterCart.innerHTML = (counterCart.innerHTML | 0) + 1;
  })
};

for (let addingBookmark of addingBookmarks) {
  addingBookmark.addEventListener("click", function (evt) {
    evt.preventDefault();
    userBookmarks.classList.add("products-interaction-notempty");
    counterBookmarks.innerHTML = (counterBookmarks.innerHTML | 0) + 1;
  })
};

addingClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addingWindow.classList.remove("modal-show");
  pageBody.classList.remove("modal-background-noscroll");
});

addingCloseBackground.addEventListener("click", function (evt) {
  evt.preventDefault();
  addingWindow.classList.remove("modal-show");
  pageBody.classList.remove("modal-background-noscroll");
});

continueShopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  addingWindow.classList.remove("modal-show");
  pageBody.classList.remove("modal-background-noscroll");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addingWindow.classList.contains("modal-show")) {
      evt.preventDefault();
      addingWindow.classList.remove("modal-show");
      pageBody.classList.remove("modal-background-noscroll");
    }
  }
});

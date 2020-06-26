var catalogButtons = document.querySelectorAll(".catalog-item-buttons");
var cartButton = document.querySelectorAll(".add-to-cart");
var bookmarkButton = document.querySelectorAll(".add-to-bookmarks");
var photoFrame = document.querySelectorAll(".catalog-item-photo-frame");

cartButton.forEach(function(el, index) {
  el.addEventListener("focus", function() {
    catalogButtons[index].classList.add("catalog-item-buttons-shown");
    photoFrame[index].classList.add("catalog-item-photo-frame-hidden");
  }, true);
  el.addEventListener("blur", function() {
    catalogButtons[index].classList.remove("catalog-item-buttons-shown");
    photoFrame[index].classList.remove("catalog-item-photo-frame-hidden");
  }, true);
});

bookmarkButton.forEach(function(el, index) {
  el.addEventListener("focus", function() {
    catalogButtons[index].classList.add("catalog-item-buttons-shown");
    photoFrame[index].classList.add("catalog-item-photo-frame-hidden");
  }, true);
  el.addEventListener("blur", function() {
    catalogButtons[index].classList.remove("catalog-item-buttons-shown");
    photoFrame[index].classList.remove("catalog-item-photo-frame-hidden");
  }, true);
});

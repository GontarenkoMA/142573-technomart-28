var pageBody = document.querySelector(".page-body");
var miniMap = pageBody.querySelector(".mini-map");
var mapWindow = pageBody.querySelector(".container-map-window");
var mapClose = mapWindow.querySelector(".modal-close");
var mapCloseBackground = mapWindow.querySelector(".modal-close-background");

miniMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.add("modal-show");
  pageBody.classList.add("modal-background-noscroll");
});


mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.remove("modal-show");
  pageBody.classList.remove("modal-background-noscroll");
});

mapCloseBackground.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.remove("modal-show");
  pageBody.classList.remove("modal-background-noscroll");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapWindow.classList.contains("modal-show")) {
      evt.preventDefault();
      mapWindow.classList.remove("modal-show");
      pageBody.classList.remove("modal-background-noscroll");
    }
  }
});

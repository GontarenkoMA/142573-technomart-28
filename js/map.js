var miniMap = document.querySelector(".mini-map");
var mapWindow = document.querySelector(".container-map-window");
var mapClose = mapWindow.querySelector(".modal-close");
var mapCloseBackground = mapWindow.querySelector(".modal-close-background");

miniMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.add("modal-show");
});


mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.remove("modal-show");
});

mapCloseBackground.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapWindow.classList.contains("modal-show")) {
      evt.preventDefault();
      mapWindow.classList.remove("modal-show");
    }
  }
});

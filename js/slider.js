var sliderItems = document.querySelectorAll(".slider-item");
var controlDots = document.querySelector(".slider-control-dots");
var controlBackward = document.querySelector(".slider-control-button-backward");
var controlForward = document.querySelector(".slider-control-button-forward");
var x = 1;
var n = sliderItems.length - 1;

for (var i = 0; i < n + 1; i++) {
  controlDots.innerHTML = controlDots.innerHTML + "<button type=\"button\" class=\"slider-control-dot\" aria-label=\"Cлайд " + (i + 1) + " \"></button>";
}

var controlDots = controlDots.querySelectorAll(".slider-control-dot");

for (var j = 0; j < n + 1; j++) {
	controlDots[j].classList.remove("slider-control-dot-current")
	sliderItems[j].classList.remove("slider-item-current");
}
controlDots[x].classList.add("slider-control-dot-current")
sliderItems[x].classList.add("slider-item-current");

controlDots.forEach(function(el, index) {
  el.addEventListener("click", function() {
    if (!el.classList.contains("slider-control-dot-current")) {
      document
        .querySelector(".slider-control-dot-current")
        .classList.remove("slider-control-dot-current");
      el.classList.add("slider-control-dot-current");
    }
    document
      .querySelector(".slider-item-current")
      .classList.remove("slider-item-current");
    sliderItems[index].classList.add("slider-item-current");
    x = index;
  });
});

controlBackward.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (x === 0) {
		x = n;
		sliderItems[x].classList.add("slider-item-current");
		controlDots[x].classList.add("slider-control-dot-current")
		sliderItems[0].classList.remove("slider-item-current");
		controlDots[0].classList.remove("slider-control-dot-current")
	} else {
		x = x - 1;
		sliderItems[x].classList.add("slider-item-current");
		controlDots[x].classList.add("slider-control-dot-current")
		sliderItems[x+1].classList.remove("slider-item-current");
		controlDots[x+1].classList.remove("slider-control-dot-current")
	}
});

controlForward.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (x == n) {
		x = 0;
		sliderItems[x].classList.add("slider-item-current");
		controlDots[x].classList.add("slider-control-dot-current")
		sliderItems[n].classList.remove("slider-item-current");
		controlDots[n].classList.remove("slider-control-dot-current")
	} else {
		x = x + 1;
		sliderItems[x].classList.add("slider-item-current");
		controlDots[x].classList.add("slider-control-dot-current")
		sliderItems[x-1].classList.remove("slider-item-current");
		controlDots[x-1].classList.remove("slider-control-dot-current")
	}
});

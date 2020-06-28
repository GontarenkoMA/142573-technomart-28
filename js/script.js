/* Слайдер
если есть */
var sliderItems = document.querySelectorAll(".slider-item");
var n = sliderItems.length - 1;
if (n > -1) {
  var controlDotsContainer = document.querySelector(".slider-control-dots");
  var controlBackward = document.querySelector(".slider-control-button-backward");
  var controlForward = document.querySelector(".slider-control-button-forward");
  var x = 1;

  for (var i = 0; i < n + 1; i++) {
    controlDotsContainer.innerHTML = controlDotsContainer.innerHTML + "<button type=\"button\" class=\"slider-control-dot\" aria-label=\"Cлайд " + (i + 1) + " \"></button>";
  }

  var controlDots = controlDotsContainer.querySelectorAll(".slider-control-dot");

  for (var j = 0; j < n + 1; j++) {
    controlDots[j].classList.remove("slider-control-dot-current");
    sliderItems[j].classList.remove("slider-item-current");
  }
  controlDots[x].classList.add("slider-control-dot-current");
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
      controlDots[x].classList.add("slider-control-dot-current");
      sliderItems[0].classList.remove("slider-item-current");
      controlDots[0].classList.remove("slider-control-dot-current");
    } else {
      x = x - 1;
      sliderItems[x].classList.add("slider-item-current");
      controlDots[x].classList.add("slider-control-dot-current");
      sliderItems[x+1].classList.remove("slider-item-current");
      controlDots[x+1].classList.remove("slider-control-dot-current");
    }
  });

  controlForward.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (x == n) {
      x = 0;
      sliderItems[x].classList.add("slider-item-current");
      controlDots[x].classList.add("slider-control-dot-current");
      sliderItems[n].classList.remove("slider-item-current");
      controlDots[n].classList.remove("slider-control-dot-current");
    } else {
      x = x + 1;
      sliderItems[x].classList.add("slider-item-current");
      controlDots[x].classList.add("slider-control-dot-current");
      sliderItems[x-1].classList.remove("slider-item-current");
      controlDots[x-1].classList.remove("slider-control-dot-current");
    }
  });
}


/* Видимость кнопок добавления товара в корзину и закладки
при фокусировки на них
если есть
функционирование этих кнопок */
var catalogButtons = document.querySelectorAll(".catalog-item-buttons");
if (catalogButtons != null) {

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

  /* Добавление товара в корзину и закладки
   и всплывающеее окно, информирующее об этом */

  var userCart = document.querySelector(".products-interaction-item-cart");
  var userBookmarks = document.querySelector(".products-interaction-item-bookmarks");
  var counterCart = document.querySelector(".counter-cart");
  var counterBookmarks = document.querySelector(".counter-bookmarks");
  var addingWindow = document.querySelector(".container-adding-window");
  var addingClose = addingWindow.querySelector(".modal-close");
  var addingCloseBackground = addingWindow.querySelector(".modal-close-background");
  var continueShopping = addingWindow.querySelector(".continue-shopping-button");
  var orderStuff = addingWindow.querySelector("a.button");

  cartButton.forEach(function(el) {
    el.addEventListener("click", function(evt) {
      evt.preventDefault();
      userCart.classList.add("products-interaction-notempty");
      addingWindow.classList.add("modal-show");
      orderStuff.focus();
      counterCart.innerHTML = (counterCart.innerHTML | 0) + 1;
    });
  });

  bookmarkButton.forEach(function(el) {
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
}


/* Вкладки с сервисами
если есть */
var tabs = document.querySelector(".service-tabs");
if (tabs != null) {
  var tabDelivery = tabs.querySelector(".tab-delivery");
  var tabGuarantee = tabs.querySelector(".tab-guarantee");
  var tabCredit = tabs.querySelector(".tab-credit");
  var serviceDelivery = tabs.querySelector(".service-delivery");
  var serviceGuarantee = tabs.querySelector(".service-guarantee");
  var serviceCredit = tabs.querySelector(".service-credit");

  tabDelivery.disabled = true;
  serviceDelivery.classList.add("service-current");

  tabDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    tabDelivery.disabled = true;
    tabGuarantee.disabled = false;
    tabCredit.disabled = false;
    serviceDelivery.classList.add("service-current");
    serviceGuarantee.classList.remove("service-current");
    serviceCredit.classList.remove("service-current");
  });

  tabGuarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
    tabDelivery.disabled = false;
    tabGuarantee.disabled = true;
    tabCredit.disabled = false;
    serviceDelivery.classList.remove("service-current");
    serviceGuarantee.classList.add("service-current");
    serviceCredit.classList.remove("service-current");
  });

  tabCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    tabDelivery.disabled = false;
    tabGuarantee.disabled = false;
    tabCredit.disabled = true;
    serviceDelivery.classList.remove("service-current");
    serviceGuarantee.classList.remove("service-current");
    serviceCredit.classList.add("service-current");
  });
}


/* Модальное окно с картой
если есть */
var mapWindow = document.querySelector(".container-map-window");
if (mapWindow != null) {
  var miniMap = document.querySelector(".mini-map");
  var mapClose = mapWindow.querySelector(".modal-close");
  var mapCloseBackground = mapWindow.querySelector(".modal-close-background");

  miniMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapWindow.classList.add("modal-show");
    mapClose.focus();
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
}


/* Модальное окно с формой обратной связи
если есть */
var feedbackWindow = document.querySelector(".container-feedback-window");
if (feedbackWindow != null) {
  var lostButton = document.querySelector(".lost-button");
  var feedbackFrame = feedbackWindow.querySelector(".feedback-window");
  var feedbackClose = feedbackWindow.querySelector(".modal-close");
  var feedbackCloseBackground = feedbackWindow.querySelector(".modal-close-background");
  var feedbackForm = feedbackWindow.querySelector(".feedback-window-form");
  var userName = feedbackWindow.querySelector(".user-name");
  var userEmail = feedbackWindow.querySelector(".user-email");
  var messageText = feedbackWindow.querySelector(".message-text");

  var isStorageSupport = true;
  var storageUserName = "";
  var storageUserEmail = "";

  try {
    storageUserName = localStorage.getItem("username");
    storageUserEmail = localStorage.getItem("useremail");
  } catch (err) {
    isStorageSupport = false;
  }

  lostButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackWindow.classList.add("modal-show");

    if (storageUserName) {
      userName.value = storageUserName;
      userEmail.value = storageUserEmail;
      messageText.focus();
    } else {
      userName.focus();
    }
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !messageText.value) {
      evt.preventDefault();
      feedbackFrame.classList.remove("modal-error");
      feedbackFrame.offsetWidth = feedbackFrame.offsetWidth;
      feedbackFrame.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", userName.value);
        localStorage.setItem("useremail", userEmail.value);
      }
    }
  });

  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackWindow.classList.remove("modal-show");
    feedbackFrame.classList.remove("modal-error");
  });

  feedbackCloseBackground.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackWindow.classList.remove("modal-show");
    feedbackFrame.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackWindow.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackWindow.classList.remove("modal-show");
        feedbackFrame.classList.remove("modal-error");
      }
    }
  });
}

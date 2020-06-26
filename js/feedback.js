var lostButton = document.querySelector(".lost-button");
var feedbackWindow = document.querySelector(".container-feedback-window");
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

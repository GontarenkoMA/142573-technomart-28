var tabDelivery = document.querySelector(".tab-delivery");
var tabGuarantee = document.querySelector(".tab-guarantee");
var tabCredit = document.querySelector(".tab-credit");
var serviceDelivery = document.querySelector(".service-delivery");
var serviceGuarantee = document.querySelector(".service-guarantee");
var serviceCredit = document.querySelector(".service-credit");

tabDelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  tabDelivery.disabled = true;
  tabGuarantee.disabled = false;
  tabCredit.disabled = false;
  serviceDelivery.classList.remove("visually-hidden");
  serviceGuarantee.classList.add("visually-hidden");
  serviceCredit.classList.add("visually-hidden");
});

tabGuarantee.addEventListener("click", function (evt) {
  evt.preventDefault();
  tabDelivery.disabled = false;
  tabGuarantee.disabled = true;
  tabCredit.disabled = false;
  serviceDelivery.classList.add("visually-hidden");
  serviceGuarantee.classList.remove("visually-hidden");
  serviceCredit.classList.add("visually-hidden");
});

tabCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  tabDelivery.disabled = false;
  tabGuarantee.disabled = false;
  tabCredit.disabled = true;
  serviceDelivery.classList.add("visually-hidden");
  serviceGuarantee.classList.add("visually-hidden");
  serviceCredit.classList.remove("visually-hidden");
});

var tabDelivery = document.querySelector(".tab-delivery");
var tabGuarantee = document.querySelector(".tab-guarantee");
var tabCredit = document.querySelector(".tab-credit");
var serviceDelivery = document.querySelector(".service-delivery");
var serviceGuarantee = document.querySelector(".service-guarantee");
var serviceCredit = document.querySelector(".service-credit");

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

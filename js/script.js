var popupBtn = document.querySelector(".button-write");
var popup = document.querySelector(".modal-write-us");
var closeBtn = popup.querySelector(".button-modal-close");
var mapMini = document.querySelector(".device-information__map-img");
var mapPopup = document.querySelector(".modal-map");
var closeBtnMap = mapPopup.querySelector(".button-map-close");
var form = popup.querySelector(".modal-form");
var userName = popup.querySelector("[name=name]");
var userMail = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
};

popupBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
      userName.value = storage;
      userMail.focus();
    } else {
      userName.focus();
    }
});

closeBtn.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

mapMini.addEventListener("click", function (evt){
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

closeBtnMap.addEventListener("click", function (evt){
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


form.addEventListener("submit", function (evt){
  if (userName.value && userMail.value && letter.value) {
    localStorage.clear();
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userMail", userMail.value);
    localStorage.setItem("letter", letter.value);
    } else {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    } if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show")
    }
  }
});

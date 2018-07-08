var popupBtn = document.querySelector(".btn_write");
var popup = document.querySelector(".modal_write_us");
var closeBtn = popup.querySelector(".btn_modal_close");
var mapMini = document.querySelector(".map_img");
var mapPopup = document.querySelector(".modal_map");
var closeBtnMap = mapPopup.querySelector(".btn_map_close");
var form = popup.querySelector(".modal_form");
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
  popup.classList.add("modal_show");
  if (storage) {
      userName.value = storage;
      userMail.focus();
    } else {
      userName.focus();
    }
});

closeBtn.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal_show");
  popup.classList.remove("modal_error");
});

mapMini.addEventListener("click", function (evt){
  evt.preventDefault();
  mapPopup.classList.add("modal_show");
});

closeBtnMap.addEventListener("click", function (evt){
  evt.preventDefault();
  mapPopup.classList.remove("modal_show");
});


form.addEventListener("submit", function (evt){
  if (userName.value && userMail.value && letter.value) {
    localStorage.clear();
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userMail", userMail.value);
    localStorage.setItem("letter", letter.value);
    } else {
      evt.preventDefault();
      popup.classList.remove("modal_error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal_error");
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal_show")) {
      popup.classList.remove("modal_show");
      popup.classList.remove("modal_error");
    } if (mapPopup.classList.contains("modal_show")) {
      mapPopup.classList.remove("modal_show")
    }
  }
});

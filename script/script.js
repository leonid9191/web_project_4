let closeBtn = document.querySelector(".popup__close");
let editBtn = document.querySelector(".profile__button-edit");

function togglePopup() {
  let popup = document.querySelector(".popup");
  popup.classList.toggle("popup_opened");
}

closeBtn.addEventListener("click", togglePopup);
editBtn.addEventListener("click", togglePopup);

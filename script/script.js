//Wrappers
const editModal = document.querySelector(".popup__edit-profile");
const addCardModal = document.querySelector(".popup__add-card");
const gallery = document.querySelector(".gallery");
const formElement = document.querySelector(".form");

//Buttons
const editModalBtn = document.querySelector(".profile__button-edit");
const editModalCloseBtn = editModal.querySelector(".popup__close");

const addCardModalBtn = document.querySelector(".profile__button-add");
const addCardModalCloseBtn = addCardModal.querySelector(".popup__close");

const likeBtn = document.querySelector(".card__button-like");

//Inputs
const nameInput = document.querySelector(".form__input_content_name");
const jobInput = document.querySelector(".form__input_content_job");

//Form data
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const cardTemplate = document.querySelector("#card").content;

const initialCards = [
  {
    name: "Government office in Putrajaya, Malaysia.",
    link: "https://images.unsplash.com/photo-1648291881755-f984c18e16cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

function addPopup(modal) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  modal.classList.add("popup_opened");
}
function removePopup(modal) {
  modal.classList.remove("popup_opened");
}

editModalCloseBtn.addEventListener("click", () => removePopup(editModal));
editModalBtn.addEventListener("click", () => addPopup(editModal));

addCardModalCloseBtn.addEventListener("click", () => removePopup(addCardModal));
addCardModalBtn.addEventListener("click", () => addPopup(addCardModal));

function handleProfileFormSubmit(evt) {
  // This line stops the browser from
  // submitting the form in the default way.
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  removePopup();
}

//Add all cards from array by templates
initialCards.forEach((card) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__title").textContent = card.name;
  
  gallery.append(cardElement);
});

formElement.addEventListener("submit", handleProfileFormSubmit);

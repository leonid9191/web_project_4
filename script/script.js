//Wrappers
const editModal = document.querySelector(".popup__edit-profile");
const editFormElement = editModal.querySelector(".form");

const addCardModal = document.querySelector(".popup__add-card");
const addCardFormElement = addCardModal.querySelector(".form");

const cardModal = document.querySelector(".popup-card");

const gallery = document.querySelector(".gallery");

//Buttons
const editModalBtn = document.querySelector(".profile__button-edit");
const editModalCloseBtn = editModal.querySelector(".popup__close");

const cardModalCloseBtn = cardModal.querySelector(".popup__close");

const addCardModalBtn = document.querySelector(".profile__button-add");
const addCardModalCloseBtn = addCardModal.querySelector(".popup__close");

//Inputs
const nameInput = document.querySelector(".form__input_content_name");
const jobInput = document.querySelector(".form__input_content_job");

const titleCardInput = document.querySelector(".form__input_content_title");
const linkCardInput = document.querySelector(".form__input_content_link");

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

function showCardPopup(card){
  const img = card.querySelector(".card__image");
  
  cardModal.querySelector(".popup__image").src = img.src;
  cardModal.querySelector(".popup__description").textContent = img.alt;
  cardModal.classList.add("popup_opened");
}
//Show popup
function addPopup(modal) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  modal.classList.add("popup_opened");
}
//Hidden Edit Modal
function removeEditModal() {
  editModal.classList.remove("popup_opened");
}
//Hidden Card Modal
function removeCardModal() {
  cardModal.classList.remove("popup_opened");
}
//Hidden Add Card Modal
function removeAddCardModal() {
  addCardModal.classList.remove("popup_opened");
}
//Initial card
function initCard(title, link) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const trashBtn = cardElement.querySelector(".card__button-trash");
  const likeBtn = cardElement.querySelector(".card__button-like");
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = title;
  cardElement.querySelector(".card__title").textContent = title;

  likeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__button-like_liked");
  });
  trashBtn.addEventListener("click", (e) => {
    const listItem = trashBtn.closest(".card");
    listItem.remove();
  });

  cardElement.querySelector('.card__image').addEventListener("click", (e) => {
    showCardPopup(cardElement);
  })

  return cardElement;
}
//Delete card from gallery
function deleteCard() {}
//Submit information profile title and subtitle
function handleProfileFormSubmit(evt) {
  // This line stops the browser from
  // submitting the form in the default way.
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  removeEditModal();
}
//Submit information about new card
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = initCard(titleCardInput.value, linkCardInput.value);
  
  gallery.prepend(cardElement);

  removeAddCardModal();
  titleCardInput.value = "";
  linkCardInput.value = "";
}

editModalCloseBtn.addEventListener("click", () => removeEditModal());
editModalBtn.addEventListener("click", () => addPopup(editModal));

addCardModalCloseBtn.addEventListener("click", () => removeAddCardModal());
addCardModalBtn.addEventListener("click", () => addPopup(addCardModal));

cardModalCloseBtn.addEventListener("click", () => removeCardModal());


//Add all cards from array by templates
initialCards.forEach((card) => {
  const cardElement = initCard(card.name, card.link);
  gallery.append(cardElement);
});

editFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

//Wrappers
const editProfileModal = document.querySelector(".popup_type_edit-profile");
const editFormElement = editProfileModal.querySelector(".form");

const addCardModal = document.querySelector(".popup_type_add-card");
const addCardFormElement = addCardModal.querySelector(".form");

const cardViewModal = document.querySelector(".popup_type_card");

const gallery = document.querySelector(".gallery");

//Buttons
const editProfileModalButton = document.querySelector(".profile__button-edit");
const editProfileModalCloseButton = editProfileModal.querySelector(".popup__close");

const cardViewModalCloseButton = cardViewModal.querySelector(".popup__close");

const addCardModalButton = document.querySelector(".profile__button-add");
const addcardModalCloseButton = addCardModal.querySelector(".popup__close");

//Inputs
const nameEditProfileInput = document.querySelector(".form__input_content_name");
const jobEditProfileInput = document.querySelector(".form__input_content_job");

const titleAddCardInput = document.querySelector(".form__input_content_title");
const linkAddCardInput = document.querySelector(".form__input_content_link");

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
  const image = card.querySelector(".card__image");
  const cardViewImgage = cardViewModal.querySelector(".popup__image");
  const cardViewDescription = cardViewModal.querySelector(".popup__description");
  
  cardViewImgage.src = image.src;
  cardViewImgage.alt = image.alt;
  cardViewDescription.textContent = image.alt;
  cardViewModal.classList.add("popup_opened");
}
//Show popup
function addPopup(modal) {
  nameEditProfileInput.value = profileName.textContent;
  jobEditProfileInput.value = profileJob.textContent;
  modal.classList.add("popup_opened");
}
//Hidden Edit Modal
function removeEditProfileModal() {
  editProfileModal.classList.remove("popup_opened");
}
//Hidden Card Modal
function removeCardModal() {
  cardViewModal.classList.remove("popup_opened");
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

  profileName.textContent = nameEditProfileInput.value;
  profileJob.textContent = jobEditProfileInput.value;

  removeEditProfileModal();
}
//Submit information about new card
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = initCard(titleAddCardInput.value, linkAddCardInput.value);
  
  gallery.prepend(cardElement);

  removeAddCardModal();
  titleAddCardInput.value = "";
  linkAddCardInput.value = "";
}

editProfileModalCloseButton.addEventListener("click", () => removeEditProfileModal());
editProfileModalButton.addEventListener("click", () => addPopup(editProfileModal));

addcardModalCloseButton.addEventListener("click", () => removeAddCardModal());
addCardModalButton.addEventListener("click", () => addPopup(addCardModal));

cardViewModalCloseButton.addEventListener("click", () => removeCardModal());


//Add all cards from array by templates
initialCards.forEach((card) => {
  const cardElement = initCard(card.name, card.link);
  gallery.append(cardElement);
});

editFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

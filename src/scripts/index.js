import "../styles/index.css"; // add import of the main stylesheets file

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { openPopup, hidePopup } from "./utils.js";
import { configClasses, initialCards } from "./constants.js";

//Wrappers
const editProfileModal = document.querySelector(".popup_type_edit-profile");
const editFormElement = editProfileModal.querySelector(".form");

const addCardModal = document.querySelector(".popup_type_add-card");
const addCardFormElement = addCardModal.querySelector(".form");

const gallery = document.querySelector(".gallery");

//Buttons
const editProfileModalButton = document.querySelector(".profile__button-edit");
const addCardModalButton = document.querySelector(".profile__button-add");
const addCardModalCloseButton = addCardModal.querySelector(".popup__close");

//Inputs
const nameEditProfileInput = document.querySelector(
  ".form__input_content_name"
);

const jobEditProfileInput = document.querySelector(".form__input_content_job");

//Form data
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const cardTemplate = document.querySelector("#card").content;

// const cards = new Section(
//   {
//     items: initialCards,
//     renderer: (cardData) => {
//       const card = createCard(cardData);
//       cards.addItem(card);
//     },
//   },
//   '.elements__list',
// );
// cards.renderItems();


const imageModal = new PopupWithImage("popup_type_card");
imageModal.setEventListeners();

/**
 * Generate new card
 * @param {Object} cardObject
 * @returns Object
 */
const createCard = (cardObject) => {
  const card = new Card(cardObject.name, cardObject.link, cardTemplate, () => {
    imageModal.open(cardObject.name, cardObject.link);
  });
  return card.generateCard();
};

/**
 * Fill data in editProfileMockup
 * @param {string} name
 * @param {string} job
 */
const fillEditProfileForm = (name, job) => {
  nameEditProfileInput.value = name;
  jobEditProfileInput.value = job;
};

/**
 * Submit information profile title and subtitle
 * @param {event} evt
 */
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  // profileName.textContent = nameEditProfileInput.value;
  // profileJob.textContent = jobEditProfileInput.value;

  hidePopup(editProfileModal);
};


const editModal = new PopupWithForm("popup_type_edit-profile", (data) => {
  profileName.textContent = data.name;
  profileJob.textContent = data.job;
});
editModal.setEventListeners();

editProfileModalButton.addEventListener("click", () => {
  // fillEditProfileForm(profileName.textContent, profileJob.textContent);
  editModal.open();
});



const addNewCardModal = new PopupWithForm("popup_type_add-card", (data) => {
  console.log(data);
  const cardInput = {
    name: data.name,
    link: data.link,
  };
  const cardElement = createCard(cardInput);
  gallery.prepend(cardElement);
  addCardFormValidation.toggleButtonState();
});
addNewCardModal.setEventListeners();

addCardModalButton.addEventListener("click", () => {
  openPopup(addCardModal);
});
addCardModalCloseButton.addEventListener("click", () => {
  hidePopup(addCardModal);
});



//Add all cards from array by templates
initialCards.forEach((card) => {
  const cardElement = createCard(card);
  gallery.append(cardElement);
});


const editProfileFormValidator = new FormValidator(
  configClasses,
  editFormElement
);
editProfileFormValidator.enableValidation();
const addCardFormValidation = new FormValidator(
  configClasses,
  addCardFormElement
);
addCardFormValidation.enableValidation();

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

//Inputs
const nameEditProfileInput = document.querySelector(
  ".form__input_content_name"
);

const jobEditProfileInput = document.querySelector(".form__input_content_job");

const cardTemplate = document.querySelector("#card").content;


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

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__subtitle",
});

const editModal = new PopupWithForm("popup_type_edit-profile", (data) => {
  userInfo.setUserInfo(data);
});
editModal.setEventListeners();

editProfileModalButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  fillEditProfileForm(data.name, data.job);
  editModal.open();
  editProfileFormValidator.resetValidation();
});

const addNewCardModal = new PopupWithForm("popup_type_add-card", (data) => {
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
  addCardFormValidation.resetValidation();
});

//Add all cards from array by templates
initialCards.forEach((card) => {
  const cardElement = createCard(card);
  gallery.append(cardElement);
});

//--------------------------Validation-------------------------------------
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
    
    const cards = new Section(
      {
        items: initialCards,
        renderer: (data) => {
          const cardInput = {
            name: data.name,
            link: data.link,
          };
          const cardElement = createCard(cardInput);
          gallery.prepend(cardElement);
          addCardFormValidation.toggleButtonState();
        },
      },
      ".gallery"
    );
    cards.renderItems();
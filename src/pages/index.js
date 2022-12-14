import "./index.css"; // add import of the main stylesheets file
import Api from "../components/Api.js";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { configClasses } from "../scripts/constants.js";

//Wrappers
const editProfileModal = document.querySelector(".popup_type_edit-profile");
const editFormElement = editProfileModal.querySelector(".form");

const addCardModal = document.querySelector(".popup_type_add-card");
const addCardFormElement = addCardModal.querySelector(".form");

//Buttons
const editProfileModalButton = document.querySelector(".profile__button-edit");
const addCardModalButton = document.querySelector(".profile__button-add");

//Inputs
const nameEditProfileInput = document.querySelector(
  ".form__input_content_name"
);

const jobEditProfileInput = document.querySelector(".form__input_content_job");

const cardTemplate = document.querySelector("#card").content;

/**
 * Generate new card
 * @param {Object} cardObject
 * @returns Object
 */
const createCard = (cardObject) => {
  console.log('cardobject',cardObject);
  const card = new Card(cardObject, cardTemplate, () => {
    imageModal.open(cardObject.name, cardObject.link);
  });
  return card.generateCard();
};

//------------------------API----------------------------------
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "4be499fc-5672-4523-b62c-e8d2a297b26e",
    "Content-Type": "application/json",
  },
});

const getInitalCards = api.getInitialCards();
let cards;
Promise.all([getInitalCards]).then((items) => {
  const [initialCards] = items;
  cards = new Section(
    {
      items: initialCards,
      renderer: (data) => {
        const cardElement = createCard(data);
        return cardElement;
      },
    },
    ".gallery"
  );
  cards.renderItems();
});

const addNewCardModal = new PopupWithForm("popup_type_add-card", (data) => {
  api.addCard(data).then((res) => {
    const cardElement = createCard(res);
    cards.prepenedItem(cardElement);
    addCardFormValidation.toggleButtonState();
  });
});

const imageModal = new PopupWithImage("popup_type_card");
imageModal.setEventListeners();

/**
 * Fill data in editProfileMockup
 * @param {string} name
 * @param {string} job
 */
const fillEditProfileForm = (name, about) => {
  nameEditProfileInput.value = name;
  jobEditProfileInput.value = about;
};

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__subtitle",
});
const getUser = api.getUserInfo();
getUser.then((data) => {
  userInfo.setUserInfo(data);
});

const editModal = new PopupWithForm("popup_type_edit-profile", (data) => {
  userInfo.setUserInfo(data);
});
editModal.setEventListeners();

editProfileModalButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  fillEditProfileForm(data.name, data.about);
  editModal.open();
  editProfileFormValidator.resetValidation();
});

addNewCardModal.setEventListeners();

addCardModalButton.addEventListener("click", () => {
  addNewCardModal.open();
  addCardFormValidation.resetValidation();
  addCardFormValidation.toggleButtonState();
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

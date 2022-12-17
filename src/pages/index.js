import "./index.css"; // add import of the main stylesheets file
import Api from "../components/Api.js";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import { configClasses } from "../scripts/constants.js";

//Wrappers
const editProfileModal = document.querySelector(".popup_type_edit-profile");
const editFormElement = editProfileModal.querySelector(".form");

const addCardModal = document.querySelector(".popup_type_add-card");
const addCardFormElement = addCardModal.querySelector(".form");

const editAvatarCardModal = document.querySelector(".popup_type_edit-avatar");
const editAvatarElement = editAvatarCardModal.querySelector(".form");

//Buttons
const editProfileModalButton = document.querySelector(".profile__button-edit");
const addCardModalButton = document.querySelector(".profile__button-add");
const editAvatarButton = document.querySelector(
  ".profile__change-avatar-button"
);

//Inputs
const nameEditProfileInput = document.querySelector(
  ".form__input_content_name"
);

const jobEditProfileInput = document.querySelector(".form__input_content_job");

const cardTemplate = document.querySelector("#card").content;
//------------------------API----------------------------------
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "4be499fc-5672-4523-b62c-e8d2a297b26e",
    "Content-Type": "application/json",
  },
});

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
  avatarSelector: ".profile__avatar-img",
});

let cards;
let userId;
const getUser = api.getUserInfo();
/**
 * Generate new card
 * @param {Object} cardObject
 * @returns Object
 */
const createCard = (cardObject, userId) => {
  const card = new Card(
    cardObject,
    cardTemplate,
    {
      handleCardClick: () => {
        imageModal.open(cardObject.name, cardObject.link);
      },
      handleDeleteCard: (id) => {
        confirmModal.open();
        confirmModal.setAction(() => {
          api.deleteCard(id).then(() => {
            card.removeCard();
          });
        });
      },
      handleLikeIcon: (id) => {
        const isAlreadyLiked = card.isLiked();
        console.log(isAlreadyLiked);
        if (isAlreadyLiked) {
          api.dislikeCard(id).then((res) => {
            console.log("dislike", res);
            card.toggleLike(res.likes);
          });
        } else {
          api.likeCard(id).then((res) => {
            console.log("like", res);
            card.toggleLike(res.likes);
          });
        }
      },
    },
    userId
  );
  return card.generateCard();
};

Promise.all([api.getInitialCards(), getUser]).then(([items, userData]) => {
  userId = userData._id;
  userInfo.setUserInfo({ name: userData.name, about: userData.about });
  userInfo.setAvatar({ avatar: userData.avatar });
  cards = new Section(
    {
      items: items,
      renderer: (data) => {
        const cardElement = createCard(data, userId);
        return cardElement;
      },
    },
    ".gallery"
  );
  cards.renderItems();
});

const addNewCardModal = new PopupWithForm("popup_type_add-card", (data) => {
  api.addCard(data).then((res) => {
    const cardElement = createCard(res, userId);
    cards.prepenedItem(cardElement);
    addCardFormValidation.toggleButtonState();
  });
});
addNewCardModal.setEventListeners();

const editAvatarModal = new PopupWithForm("popup_type_edit-avatar", (data) => {
  api.editUserAvatar(data.link).then((res) => {
    userInfo.setAvatar({ avatar: data.link });
    addCardFormValidation.toggleButtonState();
  });
});
editAvatarModal.setEventListeners();

const imageModal = new PopupWithImage("popup_type_card");
imageModal.setEventListeners();
const confirmModal = new PopupWithSubmit("popup_type_delete-card-form");
confirmModal.setEventListeners();

const editModal = new PopupWithForm("popup_type_edit-profile", (data) => {
  api.editUserInfo(data).then((res) => {
    userInfo.setUserInfo(res);
  });
});
editModal.setEventListeners();

editProfileModalButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  fillEditProfileForm(data.name, data.about);
  editModal.open();
  editProfileFormValidator.resetValidation();
});

addCardModalButton.addEventListener("click", () => {
  addNewCardModal.open();
  addCardFormValidation.resetValidation();
  addCardFormValidation.toggleButtonState();
});
editAvatarButton.addEventListener("click", () => {
  editAvatarModal.open();
  // editAvatarCardFormValidation.resetValidation();
  // editAvatarCardFormValidation.toggleButtonState();
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

const editAvatarCardFormValidation = new FormValidator(
  configClasses,
  editAvatarElement
);
editAvatarCardFormValidation.enableValidation();

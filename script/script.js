//Wrappers
const editProfileModal = document.querySelector(".popup_type_edit-profile");
const editFormElement = editProfileModal.querySelector(".form");

const addCardModal = document.querySelector(".popup_type_add-card");
const addCardFormElement = addCardModal.querySelector(".form");

const cardViewModal = document.querySelector(".popup_type_card");

const gallery = document.querySelector(".gallery");

//Buttons
const editProfileModalButton = document.querySelector(".profile__button-edit");
const editProfileModalCloseButton =
  editProfileModal.querySelector(".popup__close");

const cardViewModalCloseButton = cardViewModal.querySelector(".popup__close");

const addCardModalButton = document.querySelector(".profile__button-add");
const addCardModalCloseButton = addCardModal.querySelector(".popup__close");

//Inputs
const nameEditProfileInput = document.querySelector(
  ".form__input_content_name"
);

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

/**
 * Open popup
 * @param {string} modal
 */
const openPopup = (modal) => {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscape);
  modal.addEventListener("mousedown", closePopupOnRemoteClick);
};

/**
 * Hide popup
 * @param {string} modal
 */
const hidePopup = (modal) => {
  console.log(modal);
  modal.classList.remove("popup_opened");
  modal.removeEventListener("keydown", closePopupByEscape);
  modal.removeEventListener("mousedown", closePopupOnRemoteClick);
};

/**
 * Fill data in CardViewPopup
 * @param {string} card
 */
const openPreviewPopup = (card) => {
  const image = card.querySelector(".card__image");
  const cardViewImgage = cardViewModal.querySelector(".popup__image");
  const cardViewDescription = cardViewModal.querySelector(
    ".popup__description"
  );

  cardViewImgage.src = image.src;
  cardViewImgage.alt = image.alt;
  cardViewDescription.textContent = image.alt;
  openPopup(cardViewModal);
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
 * Initial card
 * @param {string} card
 * @returns
 */
const initCard = (card) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const imageElement = cardElement.querySelector(".card__image");
  const titleElement = cardElement.querySelector(".card__title");
  const trashButton = cardElement.querySelector(".card__button-trash");
  const likeButton = cardElement.querySelector(".card__button-like");
  imageElement.src = card.link;
  imageElement.alt = card.name;
  titleElement.textContent = card.name;

  likeButton.addEventListener("click", (e) => {
    e.target.classList.toggle("card__button-like_liked");
  });
  trashButton.addEventListener("click", (e) => {
    const listItem = trashButton.closest(".card");
    listItem.remove();
  });

  cardElement.querySelector(".card__image").addEventListener("click", (e) => {
    openPreviewPopup(cardElement);
  });

  return cardElement;
};

/**
 * Submit information profile title and subtitle
 * @param {event} evt
 */
const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameEditProfileInput.value;
  profileJob.textContent = jobEditProfileInput.value;

  hidePopup(editProfileModal);
};

/**
 * Submit information about new card
 * @param {event} evt
 */
const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  const cardInput = {
    name: titleAddCardInput.value,
    link: linkAddCardInput.value,
  };
  const cardElement = initCard(cardInput);

  gallery.prepend(cardElement);

  hidePopup(addCardModal);
  addCardFormElement.reset();
  const sumbitButton = addCardModal.querySelector(".form__button");
  toggleButtonState(
    [titleAddCardInput, linkAddCardInput],
    sumbitButton,
    configClasses
  );
};

/**
 * Close popup by 'esc' key
 * @param {event} evt
 */
const closePopupByEscape = (evt) => {
  if (evt.key === "Escape") {
    hidePopup(document.querySelector(".popup_opened"));
  }
};

/**
 * Close popup by click mouse out off popup
 * @param {event} evt
 */
const closePopupOnRemoteClick = (evt) => {
  if (evt.target.classList.contains("popup")) {
    hidePopup(document.querySelector(".popup_opened"));
  }
};

editProfileModalButton.addEventListener("click", () => {
  fillEditProfileForm(profileName.textContent, profileJob.textContent);
  openPopup(editProfileModal);
});
editProfileModalCloseButton.addEventListener("click", () =>
  hidePopup(editProfileModal)
);

addCardModalButton.addEventListener("click", () => openPopup(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  hidePopup(addCardModal)
);

cardViewModalCloseButton.addEventListener("click", () =>
  hidePopup(cardViewModal)
);

//Add all cards from array by templates
initialCards.forEach((card) => {
  const cardElement = initCard(card);
  gallery.append(cardElement);
});

editFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

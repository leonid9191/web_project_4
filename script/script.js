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

//Open popup
function openPopup(modal) {
  modal.classList.add("popup_opened");
}
//Hidden popup
function hiddenPopup(modal) {
  modal.classList.remove("popup_opened");
}

//Fill data in CardViewPopup
function fillCardViewPopup(card) {
  const image = card.querySelector(".card__image");
  const cardViewImgage = cardViewModal.querySelector(".popup__image");
  const cardViewDescription = cardViewModal.querySelector(
    ".popup__description"
  );

  cardViewImgage.src = image.src;
  cardViewImgage.alt = image.alt;
  cardViewDescription.textContent = image.alt;
  openPopup(cardViewModal)
}
//Fill data in editProfileMockup
function fillEditProfileForm(name, job){
  nameEditProfileInput.value = name;
  jobEditProfileInput.value = job;
}

//Initial card
function initCard(card) {
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
    fillCardViewPopup(cardElement);
  });

  return cardElement;
}
//Submit information profile title and subtitle
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameEditProfileInput.value;
  profileJob.textContent = jobEditProfileInput.value;

  hiddenPopup(editProfileModal);
}
//Submit information about new card
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const cardInput = {name: titleAddCardInput.value, link: linkAddCardInput.value};
  const cardElement = initCard(cardInput);

  gallery.prepend(cardElement);

  hiddenPopup(addCardModal);
  addCardFormElement.reset();
}

editProfileModalButton.addEventListener("click", () => {
  fillEditProfileForm(profileName.textContent, profileJob.textContent);
  openPopup(editProfileModal);
});
editProfileModalCloseButton.addEventListener("click", () =>
  hiddenPopup(editProfileModal)
);

addCardModalButton.addEventListener("click", () => openPopup(addCardModal));
addcardModalCloseButton.addEventListener("click", () =>
  hiddenPopup(addCardModal)
);

cardViewModalCloseButton.addEventListener("click", () =>
  hiddenPopup(cardViewModal)
);

//Add all cards from array by templates
initialCards.forEach((card) => {
  const cardElement = initCard(card);
  gallery.append(cardElement);
});

editFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);



//Validation

const showInputError = (formElement, inputElement, errorMessage) => {
  // Find the error message element inside the very function
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // The rest remains unchanged
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  // Find the error message element
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // The rest remains unchanged
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
}; 

// Code the 3rd function, which checks if the field is valid
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // If NOT (!), show the error element
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // If it's valid, hide the error element
    hideInputError(formElement, inputElement);
  }
};
const setEventListeners = (formElement) => {
  // Find all fields inside the form, and
  // make an array from them using the Array.from() method
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));

  // Iterate over the resulting array
  inputList.forEach((inputElement) => {
    // add the input event handler to each field
    inputElement.addEventListener("input", () => {
      // Call the isValid() function inside the callback,
      // and pass the form and the element to be checked to it
      isValid(formElement, inputElement)
    });
  });
};
const enableValidation = () => {
  // It will find all forms with the specified class in DOM, and
  // make an array from them using the Array.from() method
  const formList = Array.from(document.querySelectorAll(".form"));

  // Iterate over the resulting array
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancel default behavior for each form
      evt.preventDefault();
    });

    // Call the setEventListeners() function for each form,
    // taking a form element as an argument
    setEventListeners(formElement);
  });
};

// Call the function
enableValidation();

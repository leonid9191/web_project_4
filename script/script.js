let closeBtn = document.querySelector(".popup__close");
let editBtn = document.querySelector(".profile__button-edit");
let likeBtn = document.querySelector(".card__button-like");
let popup = document.querySelector(".popup");
let nameInput = document.querySelector(".form__input_content_name"); // Use querySelector()
let jobInput = document.querySelector(".form__input_content_job"); // Use querySelector()
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");

function addPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add("popup_opened");
}
function removePopup() {
  popup.classList.remove("popup_opened");
}

closeBtn.addEventListener("click", removePopup);
editBtn.addEventListener("click", addPopup);

// Let's find the form in the DOM
let formElement = document.querySelector(".form"); // Use the querySelector() method

// Next is the form submit handler, though
// it won't submit anywhere just yet

// Note that the function name starts with a verb
// and describes exactly what the function does
function handleProfileFormSubmit(evt) {
  // This line stops the browser from
  // submitting the form in the default way.
  evt.preventDefault();
  // Having done so, we can define our own way of submitting the form.
  // We'll explain it in more detail later.

  // Get the values of each field from the corresponding value property

  // Select elements where the field values will be entered

  // Insert new values using the textContent
  // property of the querySelector() method
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  removePopup();
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener("submit", handleProfileFormSubmit);

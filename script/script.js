let closeBtn = document.querySelector(".popup__close");
let editBtn = document.querySelector(".profile__button-edit");
let likeBtn = document.querySelector(".card__button-like");

function togglePopup() {
  let popup = document.querySelector(".popup");
  popup.classList.toggle("popup_opened");
}
function toggleLike() {
  likeBtn.classList.toggle("card__button-like-active");
}

closeBtn.addEventListener("click", togglePopup);
editBtn.addEventListener("click", togglePopup);
likeBtn.addEventListener("click", toggleLike);

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

  // Let's find the form fields in the DOM
  let nameInput = document.querySelector(".form__input_content_name"); // Use querySelector()
  let jobInput = document.querySelector(".form__input_content_job"); // Use querySelector()

  // Get the values of each field from the corresponding value property

  // Select elements where the field values will be entered

  // Insert new values using the textContent
  // property of the querySelector() method
	let profileName = document.querySelector('.profile__title');
	let profileJob = document.querySelector('.profile__subtitle');
	profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;
	togglePopup();
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener("submit", handleProfileFormSubmit);

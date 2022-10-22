const configClasses = {
  formSelector: ".form",
  inputSelector: ".form__input",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
};
//show error message under input
const showInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
};

//hide error message under input
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

//we have invalid input or no
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//Change status of button (active/inactive)
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};


//set validation check on the form
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const fieldsetList = Array.from(
    document.querySelectorAll(config.formSelector)
  );
  fieldsetList.forEach((fieldset) => {
    setEventListeners(fieldset, config);
  });
};


enableValidation(configClasses);


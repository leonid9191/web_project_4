import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitButtonText, handleFormSubmit) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".form");
    this._submitButton = this._popupForm.querySelector(".form__button");
    this._submitButtonText = submitButtonText;
    this._popupInputs = this._popupForm.querySelectorAll(".form__input");
  }

  _getInputValues(e) {
    e.preventDefault();
    const inputValues = {};

    this._popupInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    this._submitButton.textContent = "Saving...";
    this._handleFormSubmit(inputValues).then(() => {
      this.close();
      this._submitButton.textContent = this._submitButtonText;
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (e) => {
      this._getInputValues(e)
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;

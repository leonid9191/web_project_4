import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super (popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector('.form');
  }

  _getInputValues() {
    const inputs = [...this._popupForm.querySelectorAll('.form__input')];
    const inputValues = {};

    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    })

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues());
    })
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;
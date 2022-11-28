import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
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
    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;
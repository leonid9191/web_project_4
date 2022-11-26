class Popup {
  constructor (popupSelector){
    this._popupElement = document.querySelector(`.${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt){
    evt.preventDefault();

    if (evt.key === "Escape"){
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup_close')) {
        this.close();
      }
    });
  }

  open() {
    this._popupElement.classList.add('.popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('.popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }
}

export default Popup;
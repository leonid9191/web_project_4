import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor (popupSelector){
    super(popupSelector);
  }
  open( name, link ) {
    console.log(name, link);
    this._popupElement.querySelector(".popup__description").textContent = name;
    const image = this._popupElement.querySelector(".popup__image");
    image.src = link;
    image.alt = name;
    super.open();
  }
}

export default PopupWithImage;

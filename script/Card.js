class Card {
  constructor(title, link, cardSelector) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
  }
/**
 * cards template
 * @returns object
 */
  _getTemplate() {
    const cardElement = this._cardSelector
      .querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }
/**
 * new element with card by template
 * @returns object
 */
  generateCard() {
    this._element = this._getTemplate();
    const trashButton = this._element.querySelector(".card__button-trash");
    const likeButton = this._element.querySelector(".card__button-like");

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._title;
    this._element.querySelector(".card__title").textContent = this._title;

    likeButton.addEventListener("click", (e) => {
      e.target.classList.toggle("card__button-like_liked");
    });

    trashButton.addEventListener("click", (e) => {
      const listItem = trashButton.closest(".card");
      listItem.remove();
    });

    return this._element;
  }
}

export default Card;

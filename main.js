!function(){"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var t=class{constructor(e,t){var s,n;n=()=>this._inputList.some((e=>!e.validity.valid)),(s="_hasInvalidInput")in this?Object.defineProperty(this,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[s]=n,this._inputSelector=e.inputSelector,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._form=t,this._inputList=[...this._form.querySelectorAll(this._inputSelector)],this._buttonElement=this._form.querySelector(this._submitButtonSelector)}resetValidation(){this._inputList.forEach((e=>{this._hideInputError(e)}))}_showInputError(e){const t=this._form.querySelector(`.${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(`.${e.id}-error`);e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}toggleButtonState(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}_setEventListeners(){this.toggleButtonState(),this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this.toggleButtonState()}))}))}enableValidation(){this._setEventListeners()}},s=class{constructor(e){this._popupElement=document.querySelector(`.${e}`),this._handleEscClose=this._handleEscClose.bind(this)}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this._popupElement.addEventListener("mousedown",(e=>{(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&this.close()}))}open(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}close(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},n=class extends s{constructor(e,t){super(e),this._handleFormSubmit=t,this._popupForm=this._popupElement.querySelector(".form"),this._popupInputs=this._popupForm.querySelectorAll(".form__input")}_getInputValues(){const e={};return this._popupInputs.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()}))}close(){this._popupForm.reset(),super.close()}};const i={inputSelector:".form__input",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled"},o=document.querySelector(".popup_type_edit-profile").querySelector(".form"),r=document.querySelector(".popup_type_add-card").querySelector(".form"),l=(document.querySelector(".gallery"),document.querySelector(".profile__button-edit")),a=document.querySelector(".profile__button-add"),c=document.querySelector(".form__input_content_name"),u=document.querySelector(".form__input_content_job"),_=document.querySelector("#card").content,p=t=>new class{constructor(t,s,n,i){e(this,"_handleDelete",(()=>{this._element.remove(),this._element=null})),e(this,"_handleLike",(()=>{this._likeButton.classList.toggle("card__button-like_liked")})),e(this,"_setEventListeners",(()=>{this._imageElement.addEventListener("click",(()=>this._handleCardClick(this._element))),this._likeButton.addEventListener("click",this._handleLike),this._trashButton.addEventListener("click",this._handleDelete)})),e(this,"generateCard",(()=>(this._element=this._cardSelector.querySelector(".card").cloneNode(!0),this._likeButton=this._element.querySelector(".card__button-like"),this._imageElement=this._element.querySelector(".card__image"),this._trashButton=this._element.querySelector(".card__button-trash"),this._imageElement.src=this._link,this._imageElement.alt=this._title,this._element.querySelector(".card__title").textContent=this._title,this._setEventListeners(),this._element))),this._title=t,this._link=s,this._cardSelector=n,this._handleCardClick=i}}(t.name,t.link,_,(()=>{m.open(t.name,t.link)})).generateCard(),d=new class{constructor(e,t){let{items:s,renderer:n}=e;this._renderedItems=s,this._renderer=n,this._container=document.querySelector(t)}addItem(e){const t=this._renderer(e);this._container.append(t)}prepenedItem(e){this._container.prepend(e)}renderItems(){this._renderedItems.forEach((e=>{this.addItem(e)}))}}({items:[{name:"Government office in Putrajaya, Malaysia.",link:"https://images.unsplash.com/photo-1648291881755-f984c18e16cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:e=>{const t={name:e.name,link:e.link};return p(t)}},".gallery");d.renderItems();const h=new n("popup_type_add-card",(e=>{const t={name:e.name,link:e.link},s=p(t);d.prepenedItem(s),v.toggleButtonState()})),m=new class extends s{constructor(e){super(e),this.popUpDescription=this._popupElement.querySelector(".popup__description")}open(e,t){this.popUpDescription.textContent=e;const s=this._popupElement.querySelector(".popup__image");s.src=t,s.alt=e,super.open()}}("popup_type_card");m.setEventListeners();const E=new class{constructor(e){let{nameSelector:t,jobSelector:s}=e;this._name=document.querySelector(t),this._job=document.querySelector(s)}getUserInfo(){return{name:this._name.textContent,job:this._job.textContent}}setUserInfo(e){let{name:t,job:s}=e;this._name.textContent=t,this._job.textContent=s}}({nameSelector:".profile__title",jobSelector:".profile__subtitle"}),b=new n("popup_type_edit-profile",(e=>{E.setUserInfo(e)}));b.setEventListeners(),l.addEventListener("click",(()=>{const e=E.getUserInfo();var t,s;t=e.name,s=e.job,c.value=t,u.value=s,b.open(),y.resetValidation()})),h.setEventListeners(),a.addEventListener("click",(()=>{h.open(),v.resetValidation(),v.toggleButtonState()}));const y=new t(i,o);y.enableValidation();const v=new t(i,r);v.enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiaUpBc0RBLElDMENBLEVBaEdBLE1BQ0VBLFlBQVlDLEVBQVVDLEcsVUF3REgsSUFDVkMsS0FBS0MsV0FBV0MsTUFBTUMsSUFBV0EsRUFBTUMsU0FBU0MsUyxFQXpEdEIsMkIsc0JBQUEsSyx1REFBQSxLLEtBQ2pDTCxLQUFLTSxlQUFpQlIsRUFBU1MsY0FDL0JQLEtBQUtRLGlCQUFtQlYsRUFBU1csZ0JBQ2pDVCxLQUFLVSxZQUFjWixFQUFTYSxXQUM1QlgsS0FBS1ksc0JBQXdCZCxFQUFTZSxxQkFDdENiLEtBQUtjLHFCQUF1QmhCLEVBQVNpQixvQkFFckNmLEtBQUtnQixNQUFRakIsRUFDYkMsS0FBS0MsV0FBYSxJQUFJRCxLQUFLZ0IsTUFBTUMsaUJBQWlCakIsS0FBS00saUJBQ3ZETixLQUFLa0IsZUFBaUJsQixLQUFLZ0IsTUFBTUcsY0FBY25CLEtBQUtZLHNCQUN0RCxDQUVBUSxrQkFDRXBCLEtBQUtDLFdBQVdvQixTQUFTbEIsSUFDdkJILEtBQUtzQixnQkFBZ0JuQixFQUFNLEdBRS9CLENBTUFvQixnQkFBZ0JDLEdBQ2QsTUFBTUMsRUFBZXpCLEtBQUtnQixNQUFNRyxjQUFlLElBQUdLLEVBQWFFLFlBQy9ERixFQUFhRyxVQUFVQyxJQUFJNUIsS0FBS1Esa0JBQ2hDaUIsRUFBYUksWUFBY0wsRUFBYU0sa0JBQ3hDTCxFQUFhRSxVQUFVQyxJQUFJNUIsS0FBS1UsWUFDbEMsQ0FNQVksZ0JBQWdCRSxHQUNkLE1BQU1DLEVBQWV6QixLQUFLZ0IsTUFBTUcsY0FBZSxJQUFHSyxFQUFhRSxZQUMvREYsRUFBYUcsVUFBVUksT0FBTy9CLEtBQUtRLGtCQUNuQ2lCLEVBQWFFLFVBQVVJLE9BQU8vQixLQUFLVSxhQUNuQ2UsRUFBYUksWUFBYyxFQUM3QixDQU1BRyxvQkFBb0JSLEdBQ2JBLEVBQWFwQixTQUFTQyxNQUd6QkwsS0FBS3NCLGdCQUFnQkUsR0FGckJ4QixLQUFLdUIsZ0JBQWdCQyxFQUl6QixDQWFBUyxvQkFDTWpDLEtBQUtrQyxvQkFDUGxDLEtBQUtrQixlQUFlUyxVQUFVQyxJQUFJNUIsS0FBS2Msc0JBQ3ZDZCxLQUFLa0IsZUFBZWlCLFVBQVcsSUFFL0JuQyxLQUFLa0IsZUFBZVMsVUFBVUksT0FBTy9CLEtBQUtjLHNCQUMxQ2QsS0FBS2tCLGVBQWVpQixVQUFXLEVBRW5DLENBS0FDLHFCQUNFcEMsS0FBS2lDLG9CQUVMakMsS0FBS0MsV0FBV29CLFNBQVNHLElBQ3ZCQSxFQUFhYSxpQkFBaUIsU0FBUyxLQUNyQ3JDLEtBQUtnQyxvQkFBb0JSLEdBQ3pCeEIsS0FBS2lDLG1CQUFtQixHQUN4QixHQUVOLENBS0FLLG1CQUNFdEMsS0FBS29DLG9CQUNQLEdDOURGLEVBL0JBLE1BQ0V2QyxZQUFhMEMsR0FDWHZDLEtBQUt3QyxjQUFnQkMsU0FBU3RCLGNBQWUsSUFBR29CLEtBQ2hEdkMsS0FBSzBDLGdCQUFrQjFDLEtBQUswQyxnQkFBZ0JDLEtBQUszQyxLQUNuRCxDQUVBMEMsZ0JBQWdCRSxHQUNFLFdBQVpBLEVBQUlDLEtBQ043QyxLQUFLOEMsT0FFVCxDQUVBQyxvQkFDRS9DLEtBQUt3QyxjQUFjSCxpQkFBaUIsYUFBY08sS0FDNUNBLEVBQUlJLE9BQU9yQixVQUFVc0IsU0FBUyxVQUFZTCxFQUFJSSxPQUFPckIsVUFBVXNCLFNBQVMsa0JBQzFFakQsS0FBSzhDLE9BQ1AsR0FFSixDQUVBSSxPQUNFbEQsS0FBS3dDLGNBQWNiLFVBQVVDLElBQUksZ0JBQ2pDYSxTQUFTSixpQkFBaUIsUUFBU3JDLEtBQUswQyxnQkFDMUMsQ0FFQUksUUFDRTlDLEtBQUt3QyxjQUFjYixVQUFVSSxPQUFPLGdCQUNwQ1UsU0FBU1Usb0JBQW9CLFFBQVNuRCxLQUFLMEMsZ0JBQzdDLEdDUUYsRUFsQ0EsY0FBNEJVLEVBQzFCdkQsWUFBWTBDLEVBQWVjLEdBQ3pCQyxNQUFPZixHQUVQdkMsS0FBS3VELGtCQUFvQkYsRUFDekJyRCxLQUFLd0QsV0FBYXhELEtBQUt3QyxjQUFjckIsY0FBYyxTQUNuRG5CLEtBQUt5RCxhQUFlekQsS0FBS3dELFdBQVd2QyxpQkFBaUIsZUFDdkQsQ0FFQXlDLGtCQUNFLE1BQU1DLEVBQWMsQ0FBQyxFQU1yQixPQUpBM0QsS0FBS3lELGFBQWFwQyxTQUFTbEIsSUFDekJ3RCxFQUFZeEQsRUFBTXlELE1BQVF6RCxFQUFNMEQsS0FBSyxJQUdoQ0YsQ0FDVCxDQUVFWixvQkFDQU8sTUFBTVAsb0JBQ04vQyxLQUFLd0QsV0FBV25CLGlCQUFpQixVQUFXeUIsSUFDMUNBLEVBQUVDLGlCQUNGL0QsS0FBS3VELGtCQUFrQnZELEtBQUswRCxtQkFDNUIxRCxLQUFLOEMsT0FBTyxHQUVoQixDQUVBQSxRQUNFOUMsS0FBS3dELFdBQVdRLFFBQ2hCVixNQUFNUixPQUNSLEdDakNGLE1BQU1tQixFQUFnQixDQUNwQjFELGNBQWUsZUFDZkUsZ0JBQWlCLHlCQUNqQkUsV0FBWSwyQkFDWkUscUJBQXNCLGdCQUN0QkUsb0JBQXFCLHlCQ09qQm1ELEVBRG1CekIsU0FBU3RCLGNBQWMsNEJBQ1BBLGNBQWMsU0FHakRnRCxFQURlMUIsU0FBU3RCLGNBQWMsd0JBQ0pBLGNBQWMsU0FLaERpRCxHQUhVM0IsU0FBU3RCLGNBQWMsWUFHUnNCLFNBQVN0QixjQUFjLDBCQUNoRGtELEVBQXFCNUIsU0FBU3RCLGNBQWMsd0JBRzVDbUQsRUFBdUI3QixTQUFTdEIsY0FDcEMsNkJBR0lvRCxFQUFzQjlCLFNBQVN0QixjQUFjLDRCQUU3Q3FELEVBQWUvQixTQUFTdEIsY0FBYyxTQUFTc0QsUUFPOUNDLEVBQWNDLEdBQ04sSUx0Q2YsTUFDRTlFLFlBQVkrRSxFQUFPQyxFQUFNQyxFQUFjQyxHQUFpQix3QkFXeEMsS0FDZC9FLEtBQUtnRixTQUFTakQsU0FDZC9CLEtBQUtnRixTQUFXLElBQUksSUFDckIsc0JBS2EsS0FDWmhGLEtBQUtpRixZQUFZdEQsVUFBVXVELE9BQU8sMEJBQTBCLElBQzdELDZCQUtvQixLQUNuQmxGLEtBQUttRixjQUFjOUMsaUJBQWlCLFNBQVMsSUFDN0NyQyxLQUFLb0YsaUJBQWlCcEYsS0FBS2dGLFlBRTNCaEYsS0FBS2lGLFlBQVk1QyxpQkFBaUIsUUFBU3JDLEtBQUtxRixhQUNoRHJGLEtBQUtzRixhQUFhakQsaUJBQWlCLFFBQVNyQyxLQUFLdUYsY0FBYyxJQUNoRSx1QkFNYyxLQUNidkYsS0FBS2dGLFNBQVdoRixLQUFLd0YsY0FBY3JFLGNBQWMsU0FBU3NFLFdBQVUsR0FDcEV6RixLQUFLaUYsWUFBY2pGLEtBQUtnRixTQUFTN0QsY0FBYyxzQkFDL0NuQixLQUFLbUYsY0FBZ0JuRixLQUFLZ0YsU0FBUzdELGNBQWMsZ0JBQ2pEbkIsS0FBS3NGLGFBQWV0RixLQUFLZ0YsU0FBUzdELGNBQWMsdUJBQ2hEbkIsS0FBS21GLGNBQWNPLElBQU0xRixLQUFLMkYsTUFDOUIzRixLQUFLbUYsY0FBY1MsSUFBTTVGLEtBQUs2RixPQUM5QjdGLEtBQUtnRixTQUFTN0QsY0FBYyxnQkFBZ0JVLFlBQWM3QixLQUFLNkYsT0FFL0Q3RixLQUFLb0MscUJBRUVwQyxLQUFLZ0YsWUFoRFpoRixLQUFLNkYsT0FBU2pCLEVBQ2Q1RSxLQUFLMkYsTUFBUWQsRUFDYjdFLEtBQUt3RixjQUFnQlYsRUFDckI5RSxLQUFLb0YsaUJBQW1CTCxDQUUxQixHSytCc0JKLEVBQVdmLEtBQU1lLEVBQVdFLEtBQU1MLEdBQWMsS0FDcEVzQixFQUFXNUMsS0FBS3lCLEVBQVdmLEtBQU1lLEVBQVdFLEtBQUssSUFFdkNrQixlQUlSQyxFQUFRLElDN0NDLE1BQ2JuRyxZQUFZLEVBQXFCb0csR0FBbUIsSUFBeEMsTUFBRUMsRUFBSyxTQUFFQyxHQUFVLEVBQzdCbkcsS0FBS29HLGVBQWlCRixFQUN0QmxHLEtBQUtxRyxVQUFZRixFQUVqQm5HLEtBQUtzRyxXQUFhN0QsU0FBU3RCLGNBQWM4RSxFQUMzQyxDQUVBTSxRQUFRQyxHQUNOLE1BQU1DLEVBQU96RyxLQUFLcUcsVUFBVUcsR0FDNUJ4RyxLQUFLc0csV0FBV0ksT0FBT0QsRUFDekIsQ0FDQUUsYUFBYUgsR0FDWHhHLEtBQUtzRyxXQUFXTSxRQUFRSixFQUMxQixDQUVBSyxjQUNFN0csS0FBS29HLGVBQWUvRSxTQUFTbUYsSUFDM0J4RyxLQUFLdUcsUUFBUUMsRUFBSyxHQUV0QixHRDBCQSxDQUNFTixNRHZDaUIsQ0FDbkIsQ0FDRXRDLEtBQU0sNENBQ05pQixLQUFNLHlKQUVSLENBQ0VqQixLQUFNLGNBQ05pQixLQUFNLHVEQUVSLENBQ0VqQixLQUFNLGlCQUNOaUIsS0FBTSwwREFFUixDQUNFakIsS0FBTSxVQUNOaUIsS0FBTSxtREFFUixDQUNFakIsS0FBTSx3QkFDTmlCLEtBQU0sbURBRVIsQ0FDRWpCLEtBQU0saUJBQ05pQixLQUFNLGlEQ2lCTnNCLFNBQVdXLElBQ1QsTUFBTUMsRUFBWSxDQUNoQm5ELEtBQU1rRCxFQUFLbEQsS0FDWGlCLEtBQU1pQyxFQUFLakMsTUFHYixPQURvQkgsRUFBV3FDLEVBQ2IsR0FHdEIsWUFFRmYsRUFBTWEsY0FFTixNQUFNRyxFQUFrQixJQUFJQyxFQUFjLHVCQUF3QkgsSUFDaEUsTUFBTUMsRUFBWSxDQUNoQm5ELEtBQU1rRCxFQUFLbEQsS0FDWGlCLEtBQU1pQyxFQUFLakMsTUFFUHFDLEVBQWN4QyxFQUFXcUMsR0FDL0JmLEVBQU1XLGFBQWFPLEdBQ25CQyxFQUFzQmxGLG1CQUFtQixJQUdyQzZELEVBQWEsSUVyRW5CLGNBQTZCMUMsRUFDM0J2RCxZQUFhMEMsR0FDWGUsTUFBTWYsR0FDTnZDLEtBQUtvSCxpQkFBbUJwSCxLQUFLd0MsY0FBY3JCLGNBQWMsc0JBRTNELENBQ0ErQixLQUFNVSxFQUFNaUIsR0FDVjdFLEtBQUtvSCxpQkFBaUJ2RixZQUFjK0IsRUFDcEMsTUFBTXlELEVBQVFySCxLQUFLd0MsY0FBY3JCLGNBQWMsaUJBQy9Da0csRUFBTTNCLElBQU1iLEVBQ1p3QyxFQUFNekIsSUFBTWhDLEVBQ1pOLE1BQU1KLE1BQ1IsR0Z5RG9DLG1CQUN0QzRDLEVBQVcvQyxvQkFTWCxNQUtNdUUsRUFBVyxJR3RGakIsTUFDRXpILFlBQVksR0FBK0IsSUFBL0IsYUFBRTBILEVBQVksWUFBRUMsR0FBYSxFQUN2Q3hILEtBQUt5SCxNQUFRaEYsU0FBU3RCLGNBQWNvRyxHQUNwQ3ZILEtBQUswSCxLQUFPakYsU0FBU3RCLGNBQWNxRyxFQUNyQyxDQUVBRyxjQUNFLE1BQU8sQ0FDTC9ELEtBQU01RCxLQUFLeUgsTUFBTTVGLFlBQ2pCK0YsSUFBSzVILEtBQUswSCxLQUFLN0YsWUFFbkIsQ0FFQWdHLFlBQVksR0FBYSxJQUFiLEtBQUNqRSxFQUFJLElBQUVnRSxHQUFJLEVBQ3JCNUgsS0FBS3lILE1BQU01RixZQUFjK0IsRUFDekI1RCxLQUFLMEgsS0FBSzdGLFlBQWMrRixDQUMxQixHSHNFNEIsQ0FDNUJMLGFBQWMsa0JBQ2RDLFlBQWEsdUJBR1RNLEVBQVksSUFBSWIsRUFBYywyQkFBNEJILElBQzlEUSxFQUFTTyxZQUFZZixFQUFLLElBRTVCZ0IsRUFBVS9FLG9CQUVWcUIsRUFBdUIvQixpQkFBaUIsU0FBUyxLQUMvQyxNQUFNeUUsRUFBT1EsRUFBU0ssY0FoQkksSUFBQy9ELEVBQU1nRSxFQUFOaEUsRUFpQlBrRCxFQUFLbEQsS0FqQlFnRSxFQWlCRmQsRUFBS2MsSUFoQnBDdEQsRUFBcUJULE1BQVFELEVBQzdCVyxFQUFvQlYsTUFBUStELEVBZ0I1QkUsRUFBVTVFLE9BQ1Y2RSxFQUF5QjNHLGlCQUFpQixJQUc1QzRGLEVBQWdCakUsb0JBRWhCc0IsRUFBbUJoQyxpQkFBaUIsU0FBUyxLQUMzQzJFLEVBQWdCOUQsT0FDaEJpRSxFQUFzQi9GLGtCQUN0QitGLEVBQXNCbEYsbUJBQW1CLElBSTNDLE1BQU04RixFQUEyQixJQUFJQyxFQUNuQy9ELEVBQ0FDLEdBRUY2RCxFQUF5QnpGLG1CQUN6QixNQUFNNkUsRUFBd0IsSUFBSWEsRUFDaEMvRCxFQUNBRSxHQUVGZ0QsRUFBc0I3RSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgbGluaywgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcclxuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLl9saW5rID0gbGluaztcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGNhcmRcclxuICAgKi9cclxuICBfaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIHRvZ2dsZSBsaWtlIGJ1dHRvblxyXG4gICAqL1xyXG4gIF9oYW5kbGVMaWtlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fYnV0dG9uLWxpa2VfbGlrZWRcIik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIHNldCBhbGwgbGlzdGVuZXJzIG9uIHRoZSBjYXJkXHJcbiAgICovXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX2VsZW1lbnQpXHJcbiAgICApO1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlTGlrZSk7XHJcbiAgICB0aGlzLl90cmFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlRGVsZXRlKTtcclxuICB9O1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIG5ldyBlbGVtZW50IHdpdGggY2FyZCBieSB0ZW1wbGF0ZVxyXG4gICAqIEByZXR1cm5zIG9iamVjdFxyXG4gICAqL1xyXG4gIGdlbmVyYXRlQ2FyZCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9jYXJkU2VsZWN0b3IucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XHJcbiAgICB0aGlzLl90cmFzaEJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19idXR0b24tdHJhc2hcIik7XHJcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSB0aGlzLl90aXRsZTtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG5cclxuICAgIHRoaXMuX2Zvcm0gPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IFsuLi50aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcildO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXQpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgZXJyb3JcclxuICAgKiBAcGFyYW0ge29iamVjdH0gaW5wdXRFbGVtZW50XHJcbiAgICovXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBoaWRlIGVycm9yXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGlucHV0RWxlbWVudFxyXG4gICAqL1xyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNob3cgb3IgaGlkZSBlcnJvclxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dEVsZW1lbnRcclxuICAgKi9cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVja2luZyBhbGwgZmllbGRzIGZvciB2YWxpZGl0eVxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cclxuICAgKi9cclxuICBfaGFzSW52YWxpZElucHV0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dCkgPT4gIWlucHV0LnZhbGlkaXR5LnZhbGlkKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiB0b29nbGUgYnV0dG9uIHN0YXRlXHJcbiAgICovXHJcbiAgdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGFsbCBsaXN0ZW5lcnMgb24gdGhlIGNhcmRcclxuICAgKi9cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzdGFydCB2YWxpZGF0aW9uXHJcbiAgICovXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xyXG4iLCJjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IgKHBvcHVwU2VsZWN0b3Ipe1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBTZWxlY3Rvcn1gKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpe1xyXG4gICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKXtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwJykgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZScpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cDsiLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcclxuXHJcbmNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCkge1xyXG4gICAgc3VwZXIgKHBvcHVwU2VsZWN0b3IpO1xyXG5cclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgICB0aGlzLl9wb3B1cElucHV0cyA9IHRoaXMuX3BvcHVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9faW5wdXQnKTtcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XHJcblxyXG4gICAgdGhpcy5fcG9wdXBJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhGb3JtOyIsImNvbnN0IGNvbmZpZ0NsYXNzZXMgPSB7XHJcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9faW5wdXRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXQtZXJyb3JfYWN0aXZlXCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm1fX2J1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fYnV0dG9uX2Rpc2FibGVkXCIsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJHb3Zlcm5tZW50IG9mZmljZSBpbiBQdXRyYWpheWEsIE1hbGF5c2lhLlwiLFxyXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY0ODI5MTg4MTc1NS1mOTg0YzE4ZTE2Y2I/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXlaV3hoZEdWa2ZEWjhmSHhsYm53d2ZIeDhmQSUzRCUzRCZ3PTEwMDAmcT04MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCB7Y29uZmlnQ2xhc3NlcywgaW5pdGlhbENhcmRzfSIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7IC8vIGFkZCBpbXBvcnQgb2YgdGhlIG1haW4gc3R5bGVzaGVldHMgZmlsZVxyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3NjcmlwdHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vc2NyaXB0cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCB7IGNvbmZpZ0NsYXNzZXMsIGluaXRpYWxDYXJkcyB9IGZyb20gXCIuLi9zY3JpcHRzL2NvbnN0YW50cy5qc1wiO1xyXG5cclxuLy9XcmFwcGVyc1xyXG5jb25zdCBlZGl0UHJvZmlsZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX2VkaXQtcHJvZmlsZVwiKTtcclxuY29uc3QgZWRpdEZvcm1FbGVtZW50ID0gZWRpdFByb2ZpbGVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcblxyXG5jb25zdCBhZGRDYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfYWRkLWNhcmRcIik7XHJcbmNvbnN0IGFkZENhcmRGb3JtRWxlbWVudCA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcblxyXG5jb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5XCIpO1xyXG5cclxuLy9CdXR0b25zXHJcbmNvbnN0IGVkaXRQcm9maWxlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1lZGl0XCIpO1xyXG5jb25zdCBhZGRDYXJkTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1hZGRcIik7XHJcblxyXG4vL0lucHV0c1xyXG5jb25zdCBuYW1lRWRpdFByb2ZpbGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuZm9ybV9faW5wdXRfY29udGVudF9uYW1lXCJcclxuKTtcclxuXHJcbmNvbnN0IGpvYkVkaXRQcm9maWxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2lucHV0X2NvbnRlbnRfam9iXCIpO1xyXG5cclxuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkXCIpLmNvbnRlbnQ7XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgbmV3IGNhcmRcclxuICogQHBhcmFtIHtPYmplY3R9IGNhcmRPYmplY3RcclxuICogQHJldHVybnMgT2JqZWN0XHJcbiAqL1xyXG4gY29uc3QgY3JlYXRlQ2FyZCA9IChjYXJkT2JqZWN0KSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmRPYmplY3QubmFtZSwgY2FyZE9iamVjdC5saW5rLCBjYXJkVGVtcGxhdGUsICgpID0+IHtcclxuICAgIGltYWdlTW9kYWwub3BlbihjYXJkT2JqZWN0Lm5hbWUsIGNhcmRPYmplY3QubGluayk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgY2FyZHMgPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLFxyXG4gICAgcmVuZGVyZXI6IChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcmRJbnB1dCA9IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgbGluazogZGF0YS5saW5rLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoY2FyZElucHV0KTtcclxuICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gICAgfSxcclxuICB9LFxyXG4gIFwiLmdhbGxlcnlcIlxyXG4pO1xyXG5jYXJkcy5yZW5kZXJJdGVtcygpO1xyXG5cclxuY29uc3QgYWRkTmV3Q2FyZE1vZGFsID0gbmV3IFBvcHVwV2l0aEZvcm0oXCJwb3B1cF90eXBlX2FkZC1jYXJkXCIsIChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZElucHV0ID0ge1xyXG4gICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgbGluazogZGF0YS5saW5rLFxyXG4gIH07XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGNhcmRJbnB1dCk7XHJcbiAgY2FyZHMucHJlcGVuZWRJdGVtKGNhcmRFbGVtZW50KTtcclxuICBhZGRDYXJkRm9ybVZhbGlkYXRpb24udG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxufSk7XHJcblxyXG5jb25zdCBpbWFnZU1vZGFsID0gbmV3IFBvcHVwV2l0aEltYWdlKFwicG9wdXBfdHlwZV9jYXJkXCIpO1xyXG5pbWFnZU1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGaWxsIGRhdGEgaW4gZWRpdFByb2ZpbGVNb2NrdXBcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9IGpvYlxyXG4gKi9cclxuY29uc3QgZmlsbEVkaXRQcm9maWxlRm9ybSA9IChuYW1lLCBqb2IpID0+IHtcclxuICBuYW1lRWRpdFByb2ZpbGVJbnB1dC52YWx1ZSA9IG5hbWU7XHJcbiAgam9iRWRpdFByb2ZpbGVJbnB1dC52YWx1ZSA9IGpvYjtcclxufTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX3RpdGxlXCIsXHJcbiAgam9iU2VsZWN0b3I6IFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgZWRpdE1vZGFsID0gbmV3IFBvcHVwV2l0aEZvcm0oXCJwb3B1cF90eXBlX2VkaXQtcHJvZmlsZVwiLCAoZGF0YSkgPT4ge1xyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xyXG59KTtcclxuZWRpdE1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5lZGl0UHJvZmlsZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgZmlsbEVkaXRQcm9maWxlRm9ybShkYXRhLm5hbWUsIGRhdGEuam9iKTtcclxuICBlZGl0TW9kYWwub3BlbigpO1xyXG4gIGVkaXRQcm9maWxlRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG5hZGROZXdDYXJkTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmFkZENhcmRNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGFkZE5ld0NhcmRNb2RhbC5vcGVuKCk7XHJcbiAgYWRkQ2FyZEZvcm1WYWxpZGF0aW9uLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gIGFkZENhcmRGb3JtVmFsaWRhdGlvbi50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG59KTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WYWxpZGF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBlZGl0UHJvZmlsZUZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICBjb25maWdDbGFzc2VzLFxyXG4gIGVkaXRGb3JtRWxlbWVudFxyXG4pO1xyXG5lZGl0UHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5jb25zdCBhZGRDYXJkRm9ybVZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICBjb25maWdDbGFzc2VzLFxyXG4gIGFkZENhcmRGb3JtRWxlbWVudFxyXG4pO1xyXG5hZGRDYXJkRm9ybVZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcblxyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChjYXJkKTtcclxuICB9XHJcbiAgcHJlcGVuZWRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcclxuXHJcbmNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yIChwb3B1cFNlbGVjdG9yKXtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5wb3BVcERlc2NyaXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Rlc2NyaXB0aW9uXCIpO1xyXG5cclxuICB9XHJcbiAgb3BlbiggbmFtZSwgbGluayApIHtcclxuICAgIHRoaXMucG9wVXBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuICAgIGltYWdlLnNyYyA9IGxpbms7XHJcbiAgICBpbWFnZS5hbHQgPSBuYW1lO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoSW1hZ2U7XHJcbiIsImNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2pvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxyXG4gICAgICBqb2I6IHRoaXMuX2pvYi50ZXh0Q29udGVudCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyh7bmFtZSwgam9ifSkge1xyXG4gICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9qb2IudGV4dENvbnRlbnQgPSBqb2I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbztcclxuIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsInRoaXMiLCJfaW5wdXRMaXN0Iiwic29tZSIsImlucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9mb3JtIiwicXVlcnlTZWxlY3RvckFsbCIsIl9idXR0b25FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc2V0VmFsaWRhdGlvbiIsImZvckVhY2giLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dEVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJyZW1vdmUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJfaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZWQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZW5hYmxlVmFsaWRhdGlvbiIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiZG9jdW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJzZXRFdmVudExpc3RlbmVycyIsInRhcmdldCIsImNvbnRhaW5zIiwib3BlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJQb3B1cCIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX3BvcHVwRm9ybSIsIl9wb3B1cElucHV0cyIsIl9nZXRJbnB1dFZhbHVlcyIsImlucHV0VmFsdWVzIiwibmFtZSIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJjb25maWdDbGFzc2VzIiwiZWRpdEZvcm1FbGVtZW50IiwiYWRkQ2FyZEZvcm1FbGVtZW50IiwiZWRpdFByb2ZpbGVNb2RhbEJ1dHRvbiIsImFkZENhcmRNb2RhbEJ1dHRvbiIsIm5hbWVFZGl0UHJvZmlsZUlucHV0Iiwiam9iRWRpdFByb2ZpbGVJbnB1dCIsImNhcmRUZW1wbGF0ZSIsImNvbnRlbnQiLCJjcmVhdGVDYXJkIiwiY2FyZE9iamVjdCIsInRpdGxlIiwibGluayIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsIl9lbGVtZW50IiwiX2xpa2VCdXR0b24iLCJ0b2dnbGUiLCJfaW1hZ2VFbGVtZW50IiwiX2hhbmRsZUNhcmRDbGljayIsIl9oYW5kbGVMaWtlIiwiX3RyYXNoQnV0dG9uIiwiX2hhbmRsZURlbGV0ZSIsIl9jYXJkU2VsZWN0b3IiLCJjbG9uZU5vZGUiLCJzcmMiLCJfbGluayIsImFsdCIsIl90aXRsZSIsImltYWdlTW9kYWwiLCJnZW5lcmF0ZUNhcmQiLCJjYXJkcyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlZEl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImFkZEl0ZW0iLCJpdGVtIiwiY2FyZCIsImFwcGVuZCIsInByZXBlbmVkSXRlbSIsInByZXBlbmQiLCJyZW5kZXJJdGVtcyIsImRhdGEiLCJjYXJkSW5wdXQiLCJhZGROZXdDYXJkTW9kYWwiLCJQb3B1cFdpdGhGb3JtIiwiY2FyZEVsZW1lbnQiLCJhZGRDYXJkRm9ybVZhbGlkYXRpb24iLCJwb3BVcERlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ1c2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWUiLCJfam9iIiwiZ2V0VXNlckluZm8iLCJqb2IiLCJzZXRVc2VySW5mbyIsImVkaXRNb2RhbCIsImVkaXRQcm9maWxlRm9ybVZhbGlkYXRvciIsIkZvcm1WYWxpZGF0b3IiXSwic291cmNlUm9vdCI6IiJ9
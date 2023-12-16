export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }];
export const btnEdit = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector("#popup__profile");
export const popupPlace = document.querySelector("#popup__place");
export const popupImage = document.querySelector("#popup__image")
export const popupAvatar = document.querySelector("#popup__avatar")
export const addAvatar = document.querySelector('.profile__change')
export const nameInput = document.querySelector(".popup__input_date_name");
export const jobInput = document.querySelector(".popup__input_date_describe");
export const firstName = document.querySelector(".profile__name");
export const description = document.querySelector(".profile__description");
export const btnAddPlace = document.querySelector(".profile__add-button");
export const formElementProf = document.querySelector('[name="popupEditProf"]');
export const formElementPlace = document.querySelector('[name="popupAddPlace"]');
export const formElementAvatar = document.querySelector('#popupAvatar');
export const popupDelCard = document.querySelector('#popup__trash');
export const btnSaveCard = document.querySelector('#popup__place-btn');
export const btnSaveAvatar = document.querySelector('#popup__avatar-btn');
export const btnSaveProfile = document.querySelector('#popup__profile-btn');
export const btnTrash = document.querySelector('#popup__trash-btn');

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
  };
export const cardApi ={
  url: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: {
      "content-type": "application/json",
      authorization: 'aa78bdd8-1a6d-4453-b15d-280d5ef8f7b0'
  }
};

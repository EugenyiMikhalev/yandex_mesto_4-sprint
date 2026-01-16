let profile_modal = document.querySelector(".profile-modal");
let edit_profile_btn = document.querySelector(".profile__edit-button");

let profileName = document.querySelector(".profile__name");
let name_input = profile_modal.querySelectorAll(
  ".profile-modal__text-input"
)[0];
name_input.value = profileName.innerText;

let occupation = document.querySelector(".profile__occupation");
let occup_input = profile_modal.querySelectorAll(
  ".profile-modal__text-input"
)[1];
occup_input.value = occupation.innerText;

let profile_form = document.querySelector(".profile-modal__form");
profile_form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.innerText = name_input.value;
  occupation.innerText = occup_input.value;
  profile_modal.close();
});

edit_profile_btn.addEventListener("click", () => {
  if (
    profile_modal.hasAttribute("open") &&
    typeof profile_modal !== undefined
  ) {
    profile_modal.close();
  } else if (typeof profile_modal !== undefined) {
    name_input.value = profileName.innerText;
    occup_input.value = occupation.innerText;
    profile_modal.showModal();
  } else throw new Error("no dialog element");
});

let exit_modal_btn = document.querySelector(".profile-modal__close-button");
exit_modal_btn.addEventListener("click", () => {
  if (profile_modal.hasAttribute("open")) {
    profile_modal.close();
  }
});

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

let cardsContainer = document.querySelector(".elements");

const addCard = (card) => {
  const cardTemplate = document.getElementById("card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  console.log(cardElement);
  cardElement.querySelector(".element__image").src = card.link;
  cardElement.querySelector(".element__image").alt = card.name + " фото";
  cardElement.querySelector(".element__title").textContent = card.name;
  cardsContainer.append(cardElement);
};

initialCards.forEach((item) => {
  addCard(item);
});

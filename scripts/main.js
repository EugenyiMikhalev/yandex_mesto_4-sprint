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
  } else throw new Error("no profile dialog element");
});

let exit_profile_modal_btn = document.querySelector(
  ".profile-modal__close-button"
);
exit_profile_modal_btn.addEventListener("click", () => {
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

const deleteCard = (id) => {
  document.getElementById(id).remove();
};

const addCard = (card, where = "end") => {
  const cardTemplate = document.getElementById("card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.setAttribute("id", `${crypto.randomUUID()}`);
  console.log(cardElement);
  cardElement.querySelector(".element__image").src = card.link;
  cardElement.querySelector(".element__image").alt = card.name + " фото";
  cardElement.querySelector(".element__title").textContent = card.name;
  if (where === "start") {
    cardsContainer.prepend(cardElement);
  } else {
    cardsContainer.append(cardElement);
  }

  const likeButton = cardElement.querySelector(".like-button");
  likeButton.addEventListener("click", () => {
    if (likeButton.classList.contains("liked")) {
      likeButton.classList.remove("liked");
      likeButton.innerHTML = `
      <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            fill="none"
            viewBox="0 0 22 19"
          >
            <path
              fill="currentColor"
              d="M20.3 9.786c2.267-2.243 2.267-5.884 0-8.104-2.269-2.243-5.951-2.243-8.22 0l-1.1 1.11-1.1-1.088C7.612-.56 3.93-.56 1.684 1.682A5.66 5.66 0 0 0 0 5.745a5.75 5.75 0 0 0 1.684 4.063L10.98 19zM1.436 5.745c0-1.155.45-2.22 1.28-3.02A4.33 4.33 0 0 1 5.771 1.46c1.1 0 2.2.422 3.054 1.265l2.155 2.11 2.156-2.132c1.684-1.665 4.446-1.665 6.108 0 .808.8 1.28 1.865 1.28 3.02 0 1.154-.45 2.22-1.28 3.02l-8.264 8.192-8.263-8.17c-.808-.822-1.28-1.888-1.28-3.02"
            />
          </svg>
      `;
    } else {
      likeButton.classList.add("liked");
      likeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" fill="currentColor" viewBox="0 0 22 19"><path fill="currentColor" fill-rule="evenodd" d="M20.3 1.682c2.267 2.22 2.267 5.861 0 8.104L10.98 19 1.684 9.808A5.75 5.75 0 0 1 0 5.745C0 4.213.584 2.77 1.684 1.682 3.93-.561 7.612-.561 9.88 1.704l1.1 1.088 1.1-1.11c2.269-2.243 5.951-2.243 8.22 0" clip-rule="evenodd"/></svg>
      `;
    }
  });

  const deleteButton = cardElement.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    deleteCard(cardElement.id);
  });
};

initialCards.forEach((item) => {
  addCard(item);
});
const addCardBtn = document.querySelector(".add-button");
const cardModal = document.querySelector(".card-modal");
addCardBtn.addEventListener("click", () => {
  if (cardModal.hasAttribute("open") && typeof cardModal !== undefined) {
    cardModal.close();
  } else if (typeof cardModal !== undefined) {
    cardModal.showModal();
  } else throw new Error("no card dialog element");
});

const exit_card_modal_btn = document.querySelector(".card-modal__close-button");
exit_card_modal_btn.addEventListener("click", () => {
  if (cardModal.hasAttribute("open")) {
    cardModal.close();
  }
});

const cardModalSubmitBtn = cardModal.querySelector(
  ".card-modal__submit-button"
);
cardModalSubmitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let newCardName = cardModal.querySelectorAll(".card-modal__text-input")[0]
    .value;
  let newCardImage = cardModal.querySelectorAll(".card-modal__text-input")[1]
    .value;

  addCard({ link: newCardImage, name: newCardName }, "start");
  cardModal.querySelectorAll(".card-modal__text-input")[0].value = "";
  cardModal.querySelectorAll(".card-modal__text-input")[1].value = "";
  cardModal.close();
});

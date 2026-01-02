let profile_modal = document.querySelector(".profile-modal");
let edit_profile_btn = document.querySelector(".profile__edit-button");

let name = document.querySelector(".profile__name");
let name_input = profile_modal.querySelectorAll(
  ".profile-modal__text-input"
)[0];
name_input.value = name.innerText;

let occupation = document.querySelector(".profile__occupation");
let occup_input = profile_modal.querySelectorAll(
  ".profile-modal__text-input"
)[1];
occup_input.value = occupation.innerText;

let profile_form = document.querySelector(".profile-modal__form");
profile_form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  name.innerText = name_input.value;
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
    name_input.value = name.innerText;
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

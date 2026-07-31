const openProfile = document.getElementById("openProfile");
const profileModal = document.getElementById("profileModal");
const profileClose = document.getElementById("profileClose");
const profileBackdrop = document.getElementById("profileBackdrop");

function showProfile() {
  profileModal.classList.add("show");
  profileModal.setAttribute("aria-hidden", "false");
}

function hideProfile() {
  profileModal.classList.remove("show");
  profileModal.setAttribute("aria-hidden", "true");
}

openProfile.addEventListener("click", showProfile);

openProfile.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showProfile();
  }
});

profileClose.addEventListener("click", hideProfile);
profileBackdrop.addEventListener("click", hideProfile);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideProfile();
  }
});

function showSpinner() {
  document.querySelector(".spinner").classList.add("is-open");
  document.querySelector("[data-open]").classList.add("is-open");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("is-open");
  document.querySelector("[data-open]").classList.remove("is-open");
}

export default { showSpinner, hideSpinner };

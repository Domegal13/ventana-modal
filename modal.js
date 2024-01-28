let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".abrir")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", () => {
  modal.classList.toggle("modal-close");

  setTimeout(() => {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  }, 850);
});

window.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target == modalContainer) {
    modal.classList.toggle("modal-close");

    setTimeout(() => {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 850);
  }
});

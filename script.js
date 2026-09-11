
const noButton = document.getElementById("noButton");
const modal = document.getElementById("errorModal");
const closeButton = document.getElementById("closeError");

function openModal(){
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  closeButton.focus();
}

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  noButton.focus();
}

noButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if(event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if(event.key === "Escape" && modal.classList.contains("open")){
    closeModal();
  }
});

const confirmation = document.getElementById("referral-confirmation");

document.getElementById("show-referral-confirmation").addEventListener("click", () => {
  confirmation.showModal();
});

document.getElementById("close-referral-confirmation").addEventListener("click", () => {
  confirmation.close();
});

confirmation.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    confirmation.close();
  }
});

document.getElementById("print-referral").addEventListener("click", () => {
  window.print();
});

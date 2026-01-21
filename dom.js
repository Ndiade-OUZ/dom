const total = document.querySelector(".total");

// Fonction total
function updateTotal() {
  let sum = 0;

  document.querySelectorAll(".card-body").forEach((card) => {
    const price = parseInt(
      card.querySelector(".unit-price").innerText
    );
    const quantity = parseInt(
      card.querySelector(".quantity").innerText
    );

    sum += price * quantity;
  });

  total.innerText = sum + " $";
}

// Bouton +
document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantity = btn.parentElement.querySelector(".quantity");
    quantity.innerText = Number(quantity.innerText) + 1;
    updateTotal();
  });
});

// Bouton -
document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantity = btn.parentElement.querySelector(".quantity");
    if (Number(quantity.innerText) > 0) {
      quantity.innerText = Number(quantity.innerText) - 1;
      updateTotal();
    }
  });
});

// Supprimer article
document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// Like ❤️
document.querySelectorAll(".fa-heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("text-danger");
  });
});

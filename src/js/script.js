const modal = document.getElementById("myModal");
const cart = document.getElementById("cart");

if (cart) {
  cart.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("shown");
  });
  document.addEventListener("click", function (event) {
    if (!event.target.closest("#cart")) {
      if (!event.target.closest("#modal-content")) {
        modal.classList.remove("shown");
        modal.classList.add("hidden");
      }
    }
  });
}
// payment method radio button
//TODO

// checkout modal

const checkoutButton = document.getElementById("checkoutButton");
const checkoutModal = document.getElementById("checkout-modal");
const checkoutContainer = document.getElementById("checkout-container");
if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    checkoutModal.classList.remove("hidden");
    const otherItems = document.getElementById("other-items");
    otherItems.addEventListener("click", () => {
      const temp = otherItems.innerText;
      otherItems.previousElementSibling.classList.remove("hidden");
      otherItems.previousElementSibling.previousElementSibling.classList.remove(
        "hidden"
      );
      otherItems.classList.add("hidden");
      const p = document.createElement("p");
      p.innerText = "View less";
      p.className = "temp";
      otherItems.parentElement.appendChild(p);
      p.addEventListener("click", () => {
        otherItems.previousElementSibling.classList.add("hidden");
        otherItems.previousElementSibling.previousElementSibling.classList.add(
          "hidden"
        );
        p.remove();
        otherItems.classList.remove("hidden");
      });
    });
  });
}

let allTotal = 0;

function addToCart(element) {
  let mainEl = element.closest(".item");
  let price = mainEl.querySelector(".price").innerText;
  let name = mainEl.querySelector("h4").innerText;
  let quantity = mainEl.querySelector("input").value;
  let cartsItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {
    price = price.substring(1);
    price = parseInt(price);
    let total = price * parseInt(quantity);

    allTotal += total;

    cartsItems.innerHTML += `<div class="cart-single-item">
                              <h4>${name}</h4>
                              <p>$${price} x ${quantity} = $<span>${total}</span></p>
                              <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                            </div>`;

    document.querySelector(".total").innerText = `Total: $${allTotal}`;

    element.innerText = "Dodato";
    element.setAttribute("Disabled", "true");
  } else {
    alert("Odaberi kolicinu");
  }
}

function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  let price = mainEl.querySelector("p span").innerText;
  let name = mainEl.querySelector("h4").innerText;
  let vegetables = document.querySelectorAll(".item");
  price = parseInt(price);

  allTotal -= price;

  document.querySelector(".total").innerText = `Total: $${allTotal}`;

  mainEl.remove();

  vegetables.forEach(function (vege) {
    let itemName = vege.querySelector(".si-content h4").innerText;

    if (itemName === name) {
      vege.querySelector(".action input").value = 0;
      vege.querySelector(".action button").removeAttribute("disabled");
      vege.querySelector(".action button").innerText = "Dodaj";
    }
  });
}

var addToCartButtons = document.getElementsByClassName("add-cart");
for (i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
  var button = event.target;
  var productContainer = button.parentElement.parentElement.parentElement;
  var productName = productContainer.getElementsByClassName("title")[0]
    .innerText;
  var price = productContainer.getElementsByClassName("price")[0].innerText;
  var image = productContainer.getElementsByClassName("productImage")[0].src;
  console.log(productName, price, image);
}

function addItemToCart(productName, price, image) {
  var cartRow = document.createElement("div");

  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items");
  var cartRowItems = `
      <div class="cart-row">
          <span class="cart-item cart-header cart-column">ITEMg</span>
          <span class="cart-price cart-header cart-column">PRICE</span>
          <span class="cart-quantity cart-header cart-column">QUANTITY</span>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
}

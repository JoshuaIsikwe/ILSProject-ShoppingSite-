var fadeTime = 300;

/* Assign actions */
$(".quantity input").change(function () {
  updateQuantity(this);
});

$(".remove button").click(function () {
  removeItem(this);
});

$(document).ready(function () {
  updateSumItems();
});

/* Recalculate cart */
function recalculateCart(onlyTotal) {
  var subtotal = 0;

  /* Sum up row totals */
  $(".cart-product").each(function () {
    subtotal += parseFloat($(this).children(".subtotal").text());
  });

  /* Calculate totals */
  var total = subtotal;

  //If there is a valid promoCode, and subtotal < 10 subtract from total
  var promoPrice = parseFloat($(".promo-value").text());
  if (promoPrice) {
    if (subtotal >= 10) {
      total -= promoPrice;
    } else {
      alert("Order must be more than £10 for Promo code to apply.");
      $(".summary-promo").addClass("hide");
    }
  }

  /*If switch for update only total, update only total display*/
  if (onlyTotal) {
    /* Update total display */
    $(".total-value").fadeOut(fadeTime, function () {
      $("#cart-total").html(total.toFixed(2));
      $(".total-value").fadeIn(fadeTime);
    });
  } else {
    /* Update summary display. */
    $(".final-value").fadeOut(fadeTime, function () {
      $("#cart-subtotal").html(subtotal.toFixed(2));
      $("#cart-total").html(total.toFixed(2));
      if (total == 0) {
        $(".checkout-cta").fadeOut(fadeTime);
      } else {
        $(".checkout-cta").fadeIn(fadeTime);
      }
      $(".final-value").fadeIn(fadeTime);
    });
  }
}

/* Update quantity */
function updateQuantity(quantityInput) {
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children(".price").text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children(".subtotal").each(function () {
    $(this).fadeOut(fadeTime, function () {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });

  productRow.find(".item-quantity").text(quantity);
  updateSumItems();
}

function updateSumItems() {
  var sumItems = 0;
  $(".quantity input").each(function () {
    sumItems += parseInt($(this).val());
  });
  $(".total-items").text(sumItems);
}

/* Remove item from cart */
function removeItem(removeButton) {
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function () {
    productRow.remove();
    recalculateCart();
    updateSumItems();
  });
}

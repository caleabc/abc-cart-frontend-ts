/*
Product information component has two main sections,
- product-image-section
- product-information-section
 - Quantity...
 - Add to cart button
*/

// Lib
import { useState } from "react";

// Comp
import Spacer from "../shared/Spacer";

// Utils
import createId from "../../../utils/createId";

// CSS
import "../../../css/customer/product/product-information.css";

type Props = {
  productId: string;
  photoUrl: string;
  name: string;
  price: number;
};

function ProductInformation(props: Props) {
  let [addToCartButtonText, setAddToCartButtonText] = useState("Add to cart");
  let [quantity, setQuantity] = useState(1);

  function handleSubtractQuantity() {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  }

  function handleAddQuantity() {
    if (quantity === 9) return;
    setQuantity(quantity + 1);
  }

  function handleAddToCart() {
    // Save item to localStorage

    // The reason why there has code like this || '[]' is because 'null' can't be parsed when working with TypeScript,
    // example: localStorage.getItem("items") is equal to null then it can't be parsed that is why you need to add this code || '[]'
    // If items is an empty array means localStorage.getItem("items") is null
    let items = JSON.parse(localStorage.getItem("items") || "[]");

    let productDetails = {
      productId: props.productId,
      name: props.name,
      price: props.price,
    };

    items.push({ id: createId(), product: productDetails, quantity: quantity });

    // Convert or stringify the array to string data type since localstorage only accept string
    // On this part you are now overriding items in localstorage since items was already created
    localStorage.setItem("items", JSON.stringify(items));

    // Code below is only just effects for clicking 'Add to cart' button

    // Turn the button text into 'Adding...'
    setAddToCartButtonText("Adding...");

    // After 1 second turn the button text into 'Added'
    setTimeout(function () {
      setAddToCartButtonText("Added");

      // After 3 seconds reset the button text and quantity to its original value
      setTimeout(function () {
        setAddToCartButtonText("Add to cart");
        setQuantity(1);
      }, 3000);
    }, 1000);
  }

  return (
    <div>
      {/* Product image section */}
      <div className="product-image-section">
        <img className="product-image" src={props.photoUrl} alt={props.name} />
      </div>

      {/* Product information section */}
      <div className="product-information-section">
        <p className="product-name">{props.name}</p>
        <p className="product-price">₱{props.price}.00</p>
        <p className="product-shipping-information-header">
          SHIPPING INFORMATION
        </p>
        <p className="product-shipping-information">
          If you’re not around when the package gets delivered, a courier may
          call or send an SMS to confirm if they can leave your order with any
          authorized representative who is present at your shipping address.
          Your authorized representative will be asked to sign for the package
          on your behalf.
        </p>
        <p className="product-shipping-information">
          Please expect a delay in receiving your orders during sale events,
          special holidays, and inclement weather. Be assured that we will
          continuously work with our shipping partners to get your orders to you
          the soonest time possible.
        </p>

        <div>
          {/* Quantity section */}
          <p className="product-information-quantity-header">QUANTITY</p>
          <div className="quantity-tool-main-div">
            <div
              className="quantity-tool-subtract"
              onClick={handleSubtractQuantity}
            >
              -
            </div>
            <div className="quantity-tool-quantity">{quantity}</div>
            <div className="quantity-tool-add" onClick={handleAddQuantity}>
              +
            </div>
          </div>

          <Spacer height={1} />

          {/* Add to cart button */}
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            {addToCartButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;

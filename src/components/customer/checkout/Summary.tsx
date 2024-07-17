// Lib
import { useEffect, useState } from "react";

// Comp
import Spacer from "../shared/Spacer";

// CSS
import "../../../css/customer/checkout/summary.css";

function Summary() {
  type ProductDetails = {
    productId: string;
    name: string;
    price: number;
  };

  type Item = {
    id: string;
    product: ProductDetails;
    quantity: number;
  };

  let [items, setItems] = useState<Item[]>([]);
  let [total, setTotal] = useState(0);

  function handleCalculateTotal() {
    let output = 0;
    for (let i = 0; i < items.length; i++) {
      output += items[i].product.price * items[i].quantity;
    }

    return output;
  }

  useEffect(function () {
    // The reason why there has code like this || '[]' is because 'null' can't be parsed when working with TypeScript,
    // example: localStorage.getItem("items") is equal to null then it can't be parsed that is why you need to add this code || '[]'
    let a = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(a);
  }, []);

  // Why there are two useEffect? its because when you delete an item/order you need to recalculate the total, it will can an error if the code on this useEffect place to the first useEffect since it will re-set the items that come from localStorage
  useEffect(
    function () {
      setTotal(handleCalculateTotal());
    },
    [items]
  );

  return (
    <div className="summary-main-div">
      <div className="summary-div">
        <p className="summary-text">Summary</p>

        {/* Cart section */}
        <div>
          <p className="cart-items-header">Name</p>
          <p className="cart-items-header">Price</p>
          <p className="cart-items-header">Quantity</p>
          <p className="cart-items-header">Delete</p>
        </div>

        {items.map(function (item: Item) {
          return (
            <div key={item.id}>
              <p className="cart-product-information">{item.product.name}</p>
              <p className="cart-product-information">
                ₱{item.product.price}.00
              </p>
              <p className="cart-product-information">{item.quantity}</p>
            </div>
          );
        })}
        <div className="cart-total-div">
          <p className="cart-total">Total</p>
          <p className="cart-total">₱{total}.00</p>
        </div>

        <Spacer height={2} />

        {/* Shipping address section */}
        <p className="summary-shipping-address">1233</p>
        <p className="summary-shipping-address">Riverside</p>
        <p className="summary-shipping-address">Cagwait</p>
        <p className="summary-shipping-address">Philippines</p>

        {/* Go back and continue button section */}
        <button className="checkout-go-back-button">Go back</button>
        <button className="checkout-continue-button">Continue</button>

        {/* summary-div */}
      </div>
    </div>
  );
}

export default Summary;

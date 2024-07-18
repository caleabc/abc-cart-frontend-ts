// Lib
import { useEffect, useState } from "react";

// CSS
import "../../css/customer/cart/cart.css";

function Cart() {
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

  function handleDeleteItem(id: string) {
    let updatedItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== id) {
        updatedItems.push(items[i]);
      }
    }

    // Must also delete the item in localStorage
    localStorage.setItem("items", JSON.stringify(updatedItems));

    setItems(updatedItems);
  }

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
    <div className="cart-main-div">
      <div className="cart-items">
        <p className="cart-header">Cart</p>
        {total !== 0 && (
          <div>
            <p className="cart-items-header">Name</p>
            <p className="cart-items-header">Price</p>
            <p className="cart-items-header">Quantity</p>
            <p className="cart-items-header">Remove</p>
          </div>
        )}
        {items.map(function (item: Item) {
          return (
            <div key={item.id}>
              <p className="cart-product-information">{item.product.name}</p>
              <p className="cart-product-information">
                ₱{item.product.price}.00
              </p>
              <p className="cart-product-information">{item.quantity}</p>
              <p
                className="cart-delete-item"
                onClick={function () {
                  handleDeleteItem(item.id);
                }}
              >
                <i className="bi bi-trash"></i>
              </p>
            </div>
          );
        })}
        <div className="cart-total-div">
          <p className="cart-total">Total</p>
          <p className="cart-total">₱{total}.00</p>
        </div>

        <button className="checkout-continue-button">Continue</button>
      </div>
    </div>
  );
}

export default Cart;

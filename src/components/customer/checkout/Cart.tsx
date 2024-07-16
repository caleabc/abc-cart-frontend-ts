// CSS
import "../../../css/customer/checkout/cart.css";

type ProductDetails = {
  productId: string;
  name: string;
  price: number;
};

type Item = {
  product: ProductDetails;
  quantity: number;
};

function Cart() {
  // The reason why there has code like this || '[]' is because 'null' can't be parsed when working with TypeScript,
  // example: localStorage.getItem("items") is equal to null then it can't be parsed that is why you need to add this code || '[]'
  let items = JSON.parse(localStorage.getItem("items") || "[]");

  function handleDeleteItem(productId: string) {
    console.log(productId);
  }

  return (
    <div className="cart-main-div">
      <div className="cart-items">
        {items.map(function (item: Item) {
          return (
            <div key={item.product.productId} className="cart-item">
              <p className="cart-product-information">{item.product.name}</p>
              <p className="cart-product-information">{item.product.price}</p>
              <p className="cart-product-information">{item.quantity}</p>
              <p
                className="cart-delete-item"
                onClick={function () {
                  handleDeleteItem(item.product.productId);
                }}
              >
                <i className="bi bi-trash"></i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;

// Lib
import React from "react";
import { useParams } from "react-router-dom";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import ProductInformation from "../../components/customer/product/ProductInformation";

function Product() {
  // Currently i have no idea why it has an initial value of 'undefined' that's the reason why i add this code || "", always make sure that productId is not an empty string
  let productId = useParams().id || "";

  // Do not delete line 14-18, the following code check if productId has a correct data
  if (productId === undefined) {
    console.log(
      "Something went wrong on productId, can be found on src>pages>customer>Product.tsx on line 11"
    );
  }

  // Todo: Line 21 must change to server request...
  let product = {
    productId: productId,
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };

  return (
    <React.Fragment>
      <Navbar />
      <ProductInformation
        productId={product.productId}
        photoUrl={product.photoUrl}
        name={product.name}
        price={product.price}
      />
    </React.Fragment>
  );
}

export default Product;

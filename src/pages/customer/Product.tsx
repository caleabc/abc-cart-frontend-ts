// Lib
import React from "react";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import ProductInformation from "../../components/customer/product/ProductInformation";

function Product() {
  let product1 = {
    id: "1",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  return (
    <React.Fragment>
      <Navbar />
      <ProductInformation
        id={product1.id}
        photoUrl={product1.photoUrl}
        name={product1.name}
        price={product1.price}
      />
    </React.Fragment>
  );
}

export default Product;

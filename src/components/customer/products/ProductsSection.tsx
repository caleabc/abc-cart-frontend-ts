// Libraries
import { useEffect, useState } from "react";

// Components
import ProductCard from "../shared/ProductCard";
import Loading from "../shared/Loading";

type Product = {
  id: string;
  photoUrl: string;
  name: string;
  price: number;
};

function ProductsSection() {
  let [products, setProducts] = useState<Product[]>([]);
  let [isProductsLoaded, setIsProductsLoaded] = useState(false);

  // Note: product is hard coded for now

  let product1 = {
    id: "1",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  let product2 = {
    id: "2",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  let product3 = {
    id: "3",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  let product4 = {
    id: "4",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  let product5 = {
    id: "5",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };

  useEffect(
    function () {
      if (products.length === 0) {
        setTimeout(function () {
          setProducts([product1, product2, product3, product4, product5]);
          setIsProductsLoaded(true);
        }, 5000);
      }
    },
    [products]
  );

  // ...
  console.log("hello");

  return (
    <div>
      {isProductsLoaded ? (
        products.map(function (product) {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              photoUrl={product.photoUrl}
              name={product.name}
              price={product.price}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductsSection;

// Libraries
import { useEffect, useState } from "react";

// Components
import ProductCard from "../shared/ProductCard";
import Loading from "../shared/Loading";

type Product = {
  productId: string;
  photoUrl: string;
  name: string;
  price: number;
};

function ProductsSection() {
  let [products, setProducts] = useState<Product[]>([]);
  let [isProductsLoaded, setIsProductsLoaded] = useState(false);

  // Note: product is hard coded for now

  let product1 = {
    productId: "1",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  let product2 = {
    productId: "2",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  let product3 = {
    productId: "3",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  let product4 = {
    productId: "4",
    photoUrl:
      "https://www.penshoppe.com/cdn/shop/products/976614-Black_3.jpg?v=1706668836&width=1800",
    name: "Tshirt",
    price: 499,
  };
  let product5 = {
    productId: "5",
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

  return (
    <div>
      {isProductsLoaded ? (
        products.map(function (product) {
          return (
            <ProductCard
              key={product.productId}
              productId={product.productId}
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

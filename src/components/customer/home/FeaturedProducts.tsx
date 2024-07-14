// Comp
import ProductCard from "../shared/ProductCard";

function FeaturedProducts() {
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

  let products = [product1, product2, product3, product4, product5];

  return (
    <div>
      {products.map(function (product) {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            photoUrl={product.photoUrl}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default FeaturedProducts;

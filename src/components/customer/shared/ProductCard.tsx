// Lib
import { useNavigate } from "react-router-dom";

// CSS
import "../../../css/customer/home/product-card.css";

type Props = {
  productId: string;
  photoUrl: string;
  name: string;
  price: number;
};

function ProductCard(props: Props) {
  // Lib
  let navigate = useNavigate();

  function handleProductCard(productId: string) {
    navigate(`/product/${productId}`);
  }

  return (
    <div
      className="product-card-main-div"
      onClick={function () {
        handleProductCard(props.productId);
      }}
    >
      <img
        className="product-card-image"
        src={props.photoUrl}
        alt={props.name}
      />
      <p className="product-card-name">{props.name}</p>
      <p className="product-card-price">₱{props.price}.00</p>
    </div>
  );
}

export default ProductCard;

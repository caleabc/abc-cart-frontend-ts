// CSS
import "../../../css/customer/product/product-information.css";

type Props = {
  id: string;
  photoUrl: string;
  name: string;
  price: number;
};

function ProductInformation(props: Props) {
  return (
    <div>
      <div className="product-image-section">
        <img className="product-image" src={props.photoUrl} alt={props.name} />
      </div>

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
      </div>
    </div>
  );
}

export default ProductInformation;

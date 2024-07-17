// Lib
import { useState } from "react";

// CSS
import "../../../css/customer/checkout/shipping.css";

function Shipping() {
  let [zipCode, setZipCode] = useState("");
  let [street, setStreet] = useState("");
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");

  return (
    <div className="shipping-main-div">
      <div className="shipping-address-div">
        <p className="shipping-address-text">Shipping address</p>
        <input
          className="shipping-address-input-field"
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />

        <input
          className="shipping-address-input-field"
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

        <input
          className="shipping-address-input-field"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <input
          className="shipping-address-input-field"
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

        <button className="checkout-go-back-button">Go back</button>
        <button className="checkout-continue-button">Continue</button>
      </div>
    </div>
  );
}

export default Shipping;

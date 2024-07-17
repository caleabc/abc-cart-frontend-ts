// CSS
import { ChangeEvent, useState } from "react";
import "../../../css/customer/checkout/payment.css";

function Payment() {
  const [selectedOption, setSelectedOption] = useState("");

  function handlePaymentOption(event: ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="payment-main-div">
      <div className="payment-div">
        <p className="payment-text">Payment</p>

        <label className="payment-options">
          <input
            type="radio"
            value="Gcash"
            checked={selectedOption === "Gcash"}
            onChange={handlePaymentOption}
          />
          Gcash
        </label>

        <label className="payment-options">
          <input
            type="radio"
            value="Maya"
            checked={selectedOption === "Maya"}
            onChange={handlePaymentOption}
          />
          Maya
        </label>

        <label className="payment-options">
          <input
            type="radio"
            value="ABC Wallet"
            checked={selectedOption === "ABC Wallet"}
            onChange={handlePaymentOption}
          />
          ABC Wallet
        </label>

        <label className="payment-options">
          <input
            type="radio"
            value="Paypal"
            checked={selectedOption === "Paypal"}
            onChange={handlePaymentOption}
          />
          Paypal
        </label>

        <label className="payment-options">
          <input
            type="radio"
            value="Cash on delivery"
            checked={selectedOption === "Cash on delivery"}
            onChange={handlePaymentOption}
          />
          Cash on delivery
        </label>

        <p className="payment-option-notice-when-clicking-continue">
          By clicking 'continue' you will be redirected to payment channel
          official page
        </p>

        {/* Go back and continue button section */}
        <button className="checkout-go-back-button">Go back</button>
        <button className="checkout-continue-button">Continue</button>

        {/* payment-div */}
      </div>
    </div>
  );
}

export default Payment;

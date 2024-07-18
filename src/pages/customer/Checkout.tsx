// Lib
import React from "react";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import Spacer from "../../components/customer/shared/Spacer";
import Shipping from "../../components/customer/checkout/Shipping";
import Summary from "../../components/customer/checkout/Summary";
import Payment from "../../components/customer/checkout/Payment";
import Confirmation from "../../components/customer/checkout/Confirmation";

function Checkout() {
  // Shipping, Summary, Payment, Confirmation
  return (
    <React.Fragment>
      <Navbar />
      <Spacer height={1} />
      <Shipping />
      <Summary />
      <Payment />
      <Confirmation />
    </React.Fragment>
  );
}

export default Checkout;

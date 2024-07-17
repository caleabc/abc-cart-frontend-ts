// Lib
import React from "react";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import Spacer from "../../components/customer/shared/Spacer";
import Cart from "../../components/customer/checkout/Cart";
import Shipping from "../../components/customer/checkout/Shipping";
import Summary from "../../components/customer/checkout/Summary";
import Payment from "../../components/customer/checkout/Payment";
import Footer from "../../components/customer/shared/Footer";

function Checkout() {
  // Cart, Shipping, Summary, Payment, Confirmation
  return (
    <React.Fragment>
      <Navbar />
      <Spacer height={1} />
      <Cart />
      <Shipping />
      <Summary />
      <Payment />
      <Footer />
    </React.Fragment>
  );
}

export default Checkout;

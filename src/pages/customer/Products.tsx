// Libraries
import React from "react";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import Spacer from "../../components/customer/shared/Spacer";
import ProductToolbar from "../../components/customer/products/ProductToolbar";
import ProductsSection from "../../components/customer/products/ProductsSection";
import HorizontalRule from "../../components/customer/shared/HorizontalRule";
import Footer from "../../components/customer/shared/Footer";

function Products() {
  return (
    <React.Fragment>
      <Navbar />
      <Spacer height={2} />
      <ProductToolbar />
      <ProductsSection />
      <Spacer height={2} />
      <HorizontalRule />
      <Footer />
    </React.Fragment>
  );
}

export default Products;

// Lib
import React from "react";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import Banner from "../../components/customer/home/Banner";
import Spacer from "../../components/customer/shared/Spacer";
import Categories from "../../components/customer/home/Categories";
import FeaturedProducts from "../../components/customer/home/FeaturedProducts";
import Feedback from "../../components/customer/home/Feedback";
import HorizontalRule from "../../components/customer/shared/HorizontalRule";
import Footer from "../../components/customer/shared/Footer";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Spacer height={2} />
      <Banner />
      <Spacer height={10} />
      <Categories />
      <Spacer height={5} />
      <FeaturedProducts />
      <Spacer height={5} />
      <Feedback />
      <Spacer height={5} />
      <HorizontalRule />
      <Footer />
    </React.Fragment>
  );
}

export default Home;

// Lib
import React from "react";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import Banner from "../../components/customer/home/Banner";
import Spacer from "../../components/customer/shared/Spacer";
import Categories from "../../components/customer/home/Categories";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Spacer height={5} />
      <Banner />
      <Spacer height={5} />
      <Categories />
    </React.Fragment>
  );
}

export default Home;

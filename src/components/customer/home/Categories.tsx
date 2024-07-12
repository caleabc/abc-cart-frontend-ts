// Lib
import React from "react";

// CSS
import "../../../css/customer/home/categories.css";

// Code on line 8 can cause error, currently i don't know why, so i will be using 'require' instead of 'import'
// import tshirt from "../../../images/tshirt.png";

let tshirt = require("../../../images/tshirt.png");

function Categories() {
  return (
    <React.Fragment>
      <div className="categories-main-div">
        <div className="category">
          <img className="category-image" src={tshirt} alt="t-shirt" />
          <p>T-Shirt</p>
        </div>

        <div className="category">
          <img className="category-image" src={tshirt} alt="t-shirt" />
          <p>T-Shirt</p>
        </div>

        <div className="category">
          <img className="category-image" src={tshirt} alt="t-shirt" />
          <p>T-Shirt</p>
        </div>

        <div className="category">
          <img className="category-image" src={tshirt} alt="t-shirt" />
          <p>T-Shirt</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Categories;

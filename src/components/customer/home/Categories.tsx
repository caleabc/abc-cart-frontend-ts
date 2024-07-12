// Comp
import Category from "./Category";

// CSS
import "../../../css/customer/home/categories.css";

// Code on line 8 can cause error, currently i don't know why, so i will be using 'require' instead of 'import', see line 10
// import tshirt from "../../../images/tshirt.png";

let tshirt = require("../../../images/tshirt.png");
let shorts = require("../../../images/shorts.png");
let jeans = require("../../../images/jeans.png");
let slipper = require("../../../images/slipper.png");
let shoes = require("../../../images/shoes.png");
let cap = require("../../../images/cap.png");
let perfume = require("../../../images/perfume.png");
let readingGlass = require("../../../images/reading-eyeglasses.png");

function Categories() {
  return (
    <div>
      <Category imgSrc={tshirt} imgAlt="t-shirt" desc="T-Shirt" />
      <Category imgSrc={shorts} imgAlt="shorts" desc="Shorts" />
      <Category imgSrc={jeans} imgAlt="jeans" desc="Jeans" />
      <Category imgSrc={slipper} imgAlt="slipper" desc="Slipper" />
      <Category imgSrc={shoes} imgAlt="shoes" desc="Shoes" />
      <Category imgSrc={cap} imgAlt="cap" desc="Cap" />
      <Category imgSrc={perfume} imgAlt="perfume" desc="Perfume" />
      <Category
        imgSrc={readingGlass}
        imgAlt="reading glass"
        desc="Reading Glass"
      />
    </div>
  );
}

export default Categories;

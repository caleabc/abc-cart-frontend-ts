// CSS
import "../../../css/customer/products/product-toolbar.css";

function ProductToolbar() {
  return (
    <div className="product-toolbar-main-div">
      <p className="product-toolbar-sort-price">Price low to high</p>
      <p className="product-toolbar-sort-price">Price high to low</p>
    </div>
  );
}

export default ProductToolbar;

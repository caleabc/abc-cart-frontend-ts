// CSS
import "../../../css/customer/shared/navbar.css";

function Navbar() {
  return (
    <div className="navbar-main-div">
      <div>
        <p className="navbar-brand">ABC</p>
      </div>

      <div className="navbar-right-section">
        <p className="navbar-products">Products</p>
        <p className="navbar-favorites">Favorites</p>
        <p className="navbar-cart">Cart</p>
        <p className="navbar-search">Search</p>
        <p className="navbar-account">Account</p>
      </div>
    </div>
  );
}

export default Navbar;

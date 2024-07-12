// CSS
import "../../../css/customer/home/banner.css";

function Banner() {
  let url =
    "https://images.unsplash.com/photo-1639407624200-abd546a96304?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="banner-main-div">
      <div className="banner-left-section">
        <p className="banner-message">Shop with us this holiday season!</p>
      </div>
      <div className="banner-right-section">
        <img className="banner-image" src={url} alt="holiday season image" />
      </div>
    </div>
  );
}

export default Banner;

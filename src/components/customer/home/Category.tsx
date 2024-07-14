// CSS
import "../../../css/customer/home/category.css";

// imgSrc is equal to image source, imgAlt is equal to image alt, desc is equal to description
type Props = {
  imgSrc: string;
  imgAlt: string;
  desc: string;
};

function Category(props: Props) {
  return (
    <div className="category">
      <img className="category-image" src={props.imgSrc} alt={props.imgAlt} />
      <p className="category-description">{props.desc}</p>
    </div>
  );
}

export default Category;

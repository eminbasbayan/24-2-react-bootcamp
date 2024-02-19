import PropTypes from "prop-types";
import "./ProductItem.css";
import Button from "../UI/Button";

function ProductItem(props) {
  function handleClick() {
    console.log("tıklandı!");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.productImage} alt="image" />
      </div>
      <div className="product-info">
        <strong className="product-title">{props.productTitle}</strong>
        <span className="product-price">{props.productPrice}₺</span>
        <Button onClick={handleClick} iconName={"basket"} success>
          Sepete Ekle
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;

ProductItem.propTypes = {
  productImage: PropTypes.string,
  productTitle: PropTypes.string,
  productPrice: PropTypes.number,
};

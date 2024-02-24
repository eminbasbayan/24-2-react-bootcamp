// import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../UI/Button";

import "./ProductItem.css";

function ProductItem(props) {
  // const [title, setTitle] = useState("Elma");

  function handleClick() {
    // setTitle(props.productTitle);
    props.setParentTitle("Armut");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.productImage} alt="image" />
      </div>
      <div className="product-info">
        <strong className="product-title">{props.parentTitle}</strong>
        <span className="product-price">{props.productPrice}₺</span>
        <button onClick={handleClick}>Title Değiştir!</button>
        <Button iconName={"basket"} success>
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
  parentTitle: PropTypes.string,
  setParentTitle: PropTypes.func,
};

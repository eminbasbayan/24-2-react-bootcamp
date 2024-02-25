// import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../UI/Button";

import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.productImage} alt="image" />
      </div>
      <div className="product-info">
        <span>{props.category}</span>
        <strong className="product-title">{props.title}</strong>
        <span className="product-price">{props.productPrice}₺</span>
        <Button iconName={"basket"} success className="mt-2">
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
  title: PropTypes.string,
  category: PropTypes.string,
  setParentTitle: PropTypes.func,
};

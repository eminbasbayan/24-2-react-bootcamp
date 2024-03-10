// import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../UI/Button";

import "./ProductItem.css";

function ProductItem(props) {
  function addToCart() {
    props.setCartItems((cartItems) => {
      const findProduct = cartItems.find((cart) => cart._id === props.item._id);
      if (findProduct) {
        return cartItems.map((crtItem) => {
          if (crtItem._id === findProduct._id) {
            return {
              ...crtItem,
              amount: crtItem.amount + 1,
            };
          }
          return crtItem;
        });
      } else {
        return [
          {
            ...props.item,
            amount: 1,
          },
          ...cartItems,
        ];
      }
    });
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.productImage} alt="image" />
      </div>
      <div className="product-info">
        <span>{props.category}</span>
        <strong className="product-title">{props.title}</strong>
        <span className="product-price">{props.productPrice}₺</span>
        <Button
          iconName={"basket"}
          success
          className={"mt-2"}
          onClick={addToCart}
        >
          Sepete Ekle
        </Button>
        <Button
          iconName={"basket"}
          info
          className="my-2"
          onClick={() => props.handleUpdateClick(props._id)}
        >
          Güncelle
        </Button>
        <Button
          iconName={"trash"}
          danger
          onClick={() => props.handleDeleteItem(props._id)}
        >
          Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;

ProductItem.propTypes = {
  productImage: PropTypes.string,
  productTitle: PropTypes.string,
  productPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  parentTitle: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  setParentTitle: PropTypes.func,
  _id: PropTypes.string,
  handleDeleteItem: PropTypes.func,
  setIsUpdateMode: PropTypes.func,
  setCartItems: PropTypes.func,
  handleUpdateClick: PropTypes.func,
  item: PropTypes.object,
};

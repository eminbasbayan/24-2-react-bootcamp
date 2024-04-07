import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";

import { addToCart } from "../../redux-toolkit/slices/cartSlice";

import "./ProductItem.css";

function ProductItem(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.image} alt="image" className="!h-40" />
      </div>
      <div className="product-info">
        <span>{props.category}</span>
        <strong className="product-title hover:text-red-600 cursor-pointer" onClick={
          ()=> navigate(`/products/${props.id}`)
        }>
          {props.title.substring(0, 15)}
        </strong>
        <span className="product-price">{props.productPrice}₺</span>
        <Button
          iconName={"basket"}
          success
          className={"mt-2"}
          onClick={() => dispatch(addToCart({ item: props.item }))}
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
  image: PropTypes.string,
  category: PropTypes.string,
  setParentTitle: PropTypes.func,
  _id: PropTypes.string,
  id: PropTypes.number,
  handleDeleteItem: PropTypes.func,
  setIsUpdateMode: PropTypes.func,
  handleUpdateClick: PropTypes.func,
  item: PropTypes.object,
};

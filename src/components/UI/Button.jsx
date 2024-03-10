import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/cart/CartContext";
import "./Button.css";

function Button(props) {
  const { danger, success, info, iconName, onClick, children } = props;
  const data = useContext(CartContext);

  console.log(data);
  return (
    <button
      className={`${props.className} ${danger ? "danger" : ""} ${
        success ? "success" : ""
      } ${info ? "info" : ""}`}
      onClick={onClick}
    >
      {iconName && <i className={`bi bi-${iconName}`}></i>}
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  iconName: PropTypes.string,
  className: PropTypes.string,
};

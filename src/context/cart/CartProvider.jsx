import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

function CartProvider(props) {
  const fullName = "Emin Başbayan";
  return (
    <CartContext.Provider
      value={{
        fullName,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};

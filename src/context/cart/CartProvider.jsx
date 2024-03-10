import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

function CartProvider(props) {
  const fullName = "Emin Başbayan";
  return (
    <CartContext.Provider
      value={{
        fullName,
        products: [1, 2, 3, 4],
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

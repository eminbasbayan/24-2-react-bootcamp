import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const fullName = "Emin Başbayan";
  return (
    <CartContext.Provider
      value={{
        fullName,
        products: [1, 2, 3, 4],
        cartItems,
        setCartItems
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

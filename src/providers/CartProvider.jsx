import React, { useEffect, useState } from "react";
import { CartContext } from "./Contexts";
import { getFromCart } from "../utilities";

function CartProvider({ children }) {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    setCarts(getFromCart());
  }, [])
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

import React from "react";
import AllProducts from "../components/AllProducts";

function Shop({ cartItems, setCartItems }) {
  return (
    <div>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}>Shop</h1>
      <AllProducts cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default Shop;
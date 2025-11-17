import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";

function Shop({ cartItems, setCartItems }) {
  return (
    <div>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}>Shop</h1>
      <FeaturedProducts cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default Shop;

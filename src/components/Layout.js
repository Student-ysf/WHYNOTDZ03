import React from "react";
import Navbar from "./Navbar";
import CartPanel from "./CartPanel";

function Layout({ children, cartItems, setCartItems }) {
  return (
    <div>
      <Navbar />
      <CartPanel cartItems={cartItems} setCartItems={setCartItems} />
      <main style={{ padding: "20px", minHeight: "80vh" }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;

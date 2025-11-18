import React, { useState, useEffect } from "react";

function CartPanel({ cartItems, setCartItems }) { const [open, setOpen] = useState(false); const [removingIndex, setRemovingIndex] = useState(null); const [isMobile, setIsMobile] = useState(false);

useEffect(() => { const checkMobile = () => setIsMobile(window.innerWidth <= 600); checkMobile(); window.addEventListener("resize", checkMobile); return () => window.removeEventListener("resize", checkMobile); }, []);

const toggleCart = () => setOpen(!open);

const removeItem = (index) => { setRemovingIndex(index); setTimeout(() => { const newCart = [...cartItems]; newCart.splice(index, 1); setCartItems(newCart); setRemovingIndex(null); }, 300); };

const total = cartItems.reduce((acc, item) => acc + item.price, 0);

return ( <div> {/* Cart Button */} <div onClick={toggleCart} style={{ position: "fixed", top: "20px", right: "20px", width: "50px", height: "50px", background: "red", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "bold", cursor: "pointer", zIndex: 1000, boxShadow: "0 0 15px rgba(255,0,0,0.7)", }} > 🛒{cartItems.length} </div>

{/* Cart Panel */}
  <div
    style={{
      position: "fixed",
      top: 0,
      right: open ? 0 : isMobile ? "-100%" : "-400px",
      width: isMobile ? "100%" : "350px",
      height: "100%",
      background: "#222",
      color: "#fff",
      borderLeft: "2px solid red",
      padding: "80px 20px 20px 20px",
      overflowY: "auto",
      transition: "right 0.4s ease",
      boxShadow: "0 0 20px rgba(255,0,0,0.5)",
      zIndex: 999,
    }}
  >
    {/* Close button for mobile */}
    {isMobile && (
      <button
        onClick={toggleCart}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "red",
          border: "none",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Close ✕
      </button>
    )}

    <h2 style={{ marginBottom: "15px", textAlign: "center" }}>Your Cart</h2>

    {cartItems.length === 0 ? (
      <p style={{ textAlign: "center", color: "#aaa" }}>Cart is empty</p>
    ) : (
      cartItems.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "15px",
            paddingBottom: "5px",
            borderBottom: "1px solid #444",
            opacity: removingIndex === idx ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item.name}</span>
            <span>DZD {item.price}</span>
          </div>
          <div style={{ fontSize: "14px", color: "#aaa", marginTop: "3px" }}>
            Color: {item.color?.name || "N/A"}, Size: {item.size || "N/A"}
          </div>
          <button
            onClick={() => removeItem(idx)}
            style={{
              background: "transparent",
              border: "none",
              color: "red",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "3px",
            }}
          >
            ✕
          </button>
        </div>
      ))
    )}

    {cartItems.length > 0 && (
      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #444",
          paddingTop: "10px",
          textAlign: "center",
        }}
      >
        <strong>Total: DZD {total}</strong>
      </div>
    )}
  </div>
</div>

); }

export default CartPanel;

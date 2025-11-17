import React, { useState } from "react";

function CartPanel({ cartItems, setCartItems }) {
  const [open, setOpen] = useState(false);
  const [removingIndex, setRemovingIndex] = useState(null);

  const toggleCart = () => setOpen(!open);

  const removeItem = (index) => {
    setRemovingIndex(index);
    setTimeout(() => {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
      setRemovingIndex(null);
    }, 300);
  };

  const handleCheckout = async () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const userPhone = prompt("Please enter your phone number:");

    if (!userPhone) {
      alert("Phone number is required!");
      return;
    }

    const itemsText = cartItems
      .map(item => `• ${item.name} — Color: ${item.color?.name || "N/A"}, Size: ${item.size || "N/A"} — DZD ${item.price}`)
      .join("\n");

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    const message = `
📦 *New Order Received*
-------------------------
${itemsText}

💰 *Total:* DZD ${total}
📞 *Customer Phone:* ${userPhone}
    `;

    const BOT_TOKEN = "8518254149:AAFAMSnS2aUWh5ktDFQOKY9SJu3x_gceykw";
    const CHAT_ID = "-1003328624666";

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown"
        })
      });

      alert("Order sent successfully!");
    } catch (error) {
      console.error("Error sending Telegram message:", error);
      alert("Failed to send order.");
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <div 
        onMouseEnter={() => setOpen(true)}
        style={{ 
          position: "fixed", top: "20px", right: "20px", 
          width: "50px", height: "50px", background: "red", borderRadius: "50%", 
          display: "flex", alignItems: "center", justifyContent: "center", 
          color: "#fff", fontWeight: "bold", cursor: "pointer", zIndex: 1000,
          boxShadow: "0 0 15px rgba(255,0,0,0.7)"
        }}
      >
        🛒{cartItems.length}
      </div>

      <div 
        style={{ 
          position: "fixed", top: 0, right: open ? 0 : "-400px", 
          width: "350px", height: "100%", background: "#222", color: "#fff", 
          borderLeft: "2px solid red", padding: "80px 20px 20px 20px",
          overflowY: "auto",
          transition: "right 0.4s ease", boxShadow: "0 0 20px rgba(255,0,0,0.5)", zIndex: 999
        }}
        onMouseLeave={() => setOpen(false)}
      >
        <h2 style={{ marginBottom: "15px", textAlign: "center" }}>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center", color: "#aaa" }}>Cart is empty</p>
        ) : (
          cartItems.map((item, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: "flex", flexDirection: "column",
                marginBottom: "15px", paddingBottom: "5px", borderBottom: "1px solid #444",
                opacity: removingIndex === idx ? 0 : 1,
                transition: "opacity 0.3s ease"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{item.name}</span>
                <span>DZD {item.price}</span>
              </div>
              {}
              <div style={{ fontSize: "14px", color: "#aaa", marginTop: "3px" }}>
                Color: {item.color?.name || "N/A"}, Size: {item.size || "N/A"}
              </div>
              <button 
                onClick={() => removeItem(idx)}
                style={{ background: "transparent", border: "none", color: "red", cursor: "pointer", fontWeight: "bold", marginTop: "3px" }}
              >
                ✕
              </button>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div style={{ marginTop: "20px", borderTop: "1px solid #444", paddingTop: "10px", textAlign: "center" }}>
            <strong>Total: DZD {total}</strong>
            <button 
              onClick={handleCheckout}
              style={{
                display: "block",
                margin: "15px auto 0",
                background: "#8B0000",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(255,0,0,0.6)",
                transition: "0.3s"
              }}
            >
              Checkout via Telegram
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPanel;

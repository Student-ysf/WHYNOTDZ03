import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  images,
  name,
  price,
  cartItems,
  setCartItems,
  showAddToCart = true,
}) {
  const handleAddToCart = () => {
    if (!Array.isArray(cartItems)) {
      setCartItems([{ id, images, name, price }]);
    } else {
      setCartItems([...cartItems, { id, images, name, price }]);
    }
  };

  return (
    <div
      className="product-card"
      style={{
        background: "#222",
        padding: "10px",
        textAlign: "center",
        color: "#fff",
        width: "220px",
        margin: "10px",
      }}
    >
      <Link to={`/product/${id}`}>
        <img
          src={images[0]}
          alt={name}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </Link>
      <h3>{name}</h3>
      <p>{price} DZD</p>
      {showAddToCart && (
        <button
          onClick={handleAddToCart}
          style={{
            background: "#555",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;

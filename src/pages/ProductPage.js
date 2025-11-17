import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products"; 

function ProductPage({ cartItems, setCartItems }) {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  const defaultColors = [
    { name: "Black", code: "#000000" },
    { name: "Red", code: "#ff0000" },
    { name: "Gray", code: "#444444" }
  ];

  let colors = [];
  if (product?.colors?.length > 0) {
    colors = product.colors.map(c =>
      typeof c === "string" ? { name: c, code: c } : c
    );
  } else {
    colors = defaultColors;
  }

  if (!colors.some(c => c.code.toLowerCase() === "#ffffff")) {
    colors.push({ name: "White", code: "#ffffff" });
  }

  const sizes = product?.sizes || ["S", "M", "L", "XL"];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  if (!product) {
    return <p style={{ color: "#fff", textAlign: "center" }}>Product not found</p>;
  }

  const handleAddToCart = () => {
    const newItem = { ...product, color: selectedColor, size: selectedSize };
    if (!Array.isArray(cartItems)) {
      setCartItems([newItem]);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  const recommended = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6); 

  return (
    <div style={{ color: "#fff", padding: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>

        {}
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <h1 style={{ marginBottom: "20px" }}>{product.name}</h1>

          <img
            src={product.images[0]}
            alt={product.name}
            style={{ width: "600px", height: "auto", borderRadius: "12px", marginBottom: "20px" }}
          />

          <p style={{ fontSize: "20px", marginBottom: "10px" }}>{product.price} DZD</p>
          <p style={{ color: "#ccc", marginBottom: "20px" }}>{product.description}</p>

          {}
          <div style={{ marginBottom: "10px" }}>
            <span style={{ marginRight: "10px" }}>Color:</span>
            {colors.map((colorObj) => (
              <button
                key={colorObj.code}
                onClick={() => setSelectedColor(colorObj)}
                style={{
                  backgroundColor: colorObj.code,
                  border: selectedColor.code === colorObj.code ? "3px solid red" : "2px solid #fff",
                  marginRight: "5px",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              ></button>
            ))}
          </div>

          {}
          <div style={{ marginBottom: "20px" }}>
            <span style={{ marginRight: "10px" }}>Size:</span>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  background: selectedSize === size ? "red" : "#555",
                  color: "#fff",
                  border: "none",
                  padding: "5px 12px",
                  marginRight: "5px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  transition: "0.3s",
                }}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              background: "#ff0000",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#cc0000")}
            onMouseLeave={(e) => (e.target.style.background = "#ff0000")}
          >
            Add to Cart
          </button>
        </div>

        {}
        <div style={{ flex: "1 1 300px" }}>
          <h2 style={{ marginBottom: "20px" }}>Recommended Products</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {recommended.map((rp) => (
              <div key={rp.id} style={{ display: "flex", justifyContent: "flex-start" }}>
                <Link
                  to={`/product/${rp.id}`}
                  style={{
                    textDecoration: "none",
                    display: "inline-block", 
                  }}
                >
                  <ProductCard {...rp} showAddToCart={false} />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;

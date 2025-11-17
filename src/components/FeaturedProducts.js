import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

function FeaturedProducts({ cartItems, setCartItems }) {
  const latestProducts = [...products]
    .sort((a, b) => b.id - a.id)
    .slice(0, 4); 

  return (
    <section
      style={{
        padding: "40px",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {latestProducts.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          cartItems={cartItems}
          setCartItems={setCartItems}
          showAddToCart={false} // إخفاء زر Add to Cart
        />
      ))}
    </section>
  );
}

export default FeaturedProducts;

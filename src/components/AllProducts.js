import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function AllProducts({ cartItems, setCartItems }) {
  return (
    <section
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          cartItems={cartItems}
          setCartItems={setCartItems}
          showAddToCart={false} 
        />
      ))}
    </section>
  );
}

export default AllProducts;

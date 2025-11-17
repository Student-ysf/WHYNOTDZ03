import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cartItems={cartItems} setCartItems={setCartItems}>
              <Home cartItems={cartItems} setCartItems={setCartItems} />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout cartItems={cartItems} setCartItems={setCartItems}>
              <Shop cartItems={cartItems} setCartItems={setCartItems} />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout cartItems={cartItems} setCartItems={setCartItems}>
              <AboutUs />
            </Layout>
          }
        />
       <Route
  path="/contact"
  element={
    <Layout cartItems={cartItems} setCartItems={setCartItems}>
      <Contact />
    </Layout>
  }
/>
        <Route
          path="/product/:id"
          element={
            <Layout cartItems={cartItems} setCartItems={setCartItems}>
              <ProductPage cartItems={cartItems} setCartItems={setCartItems} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

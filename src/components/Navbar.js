import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#111", color: "#fff", padding: "15px 0",
      display: "flex", justifyContent: "center", alignItems: "center", position: "sticky", top: 0, zIndex: 1000
    }}>
      <style>
        {`
          @keyframes neonBlink {
            0% {
              text-shadow: 0 0 5px white, 0 0 10px #ff0000;
              opacity: 0.8;
            }
            50% {
              text-shadow: 0 0 15px #ff0000, 0 0 30px darkred, 0 0 45px #ff5555;
              opacity: 1;
            }
            100% {
              text-shadow: 0 0 5px white, 0 0 10px #ff0000;
              opacity: 0.8;
            }
          }
          .nav-link {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            position: relative;
            transition: 0.3s;
            padding: 5px 0;
            animation: neonBlink 1.5s infinite alternate;
          }
          .nav-link:hover {
            color: #ff0000;
            text-shadow: 0 0 15px #ff0000, 0 0 30px darkred, 0 0 45px #ff5555;
          }
        `}
      </style>
      <div style={{ display: "flex", gap: "30px", fontSize: "18px" }}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;

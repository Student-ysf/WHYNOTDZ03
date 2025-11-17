import React from "react";
import bannerImage from "../assets/banner.jpg";

function Banner() {
  return (
    <div className="banner">
      <img
        src={bannerImage}
        alt="Banner"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "500px",
          objectFit: "contain",
          display: "block"
        }}
      />
    </div>
  );
}

export default Banner;

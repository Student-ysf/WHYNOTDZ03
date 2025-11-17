import React from "react";
import batImg from "../assets/bat.png";

function Bats() {
  const bats = Array.from({ length: 10 }); 
  return (
    <>
      {bats.map((_, i) => (
        <img
          key={i}
          src={batImg}
          alt="bat"
          className="bat"
          style={{
            animationDuration: `${20 + i * 3}s`, 
            animationDelay: `${i * 2}s` 
          }}
        />
      ))}
    </>
  );
}

export default Bats;

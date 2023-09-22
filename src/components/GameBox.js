// GameBox.js

import React, { useState, useEffect } from "react";

function GameBox({ onGreenClick, onRedClick }) {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColor(color === "red" ? "green" : "red");
    }, Math.random() * 1000 + 1000);

    return () => clearTimeout(timeout);
  }, [color]);
  const handleClick = () => {
    if (color === "green") {
      onGreenClick();
    } else {
      onRedClick(); // Added handling for red box click
    }
  };

  return (
    <>
      <h1>Squid Game</h1>
      <h3>Red Light Green Light</h3>
      <div
        className="game-box"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></div>
    </>
  );
}

export default GameBox;

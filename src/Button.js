// Button.js
import React, { useState } from "react";
import "./App.css";

function Button({ onYesClick, onNoClick }) {
  const [noPosition, setNoPosition] = useState({ left: 0, top: 0 });
  const [noClicked, setNoClicked] = useState(false);

  const handleNoClick = () => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    const randomRight = window.innerWidth - randomX;
    const randomBottom = window.innerHeight - randomY;

    const leftOrRight = randomX < window.innerWidth / 2 ? "left" : "right";
    const topOrBottom = randomY < window.innerHeight / 2 ? "top" : "bottom";

    const position = {
      [leftOrRight]: leftOrRight === "left" ? randomX : randomRight,
      [topOrBottom]: topOrBottom === "top" ? randomY : randomBottom,
    };

    setNoPosition(position);
    setNoClicked(true);

    // Use the onNoClick callback to handle changing the backdrop to the crying gif
    onNoClick("https://example.com/cry.gif");

    // Add a console log to check if the function is triggered
    console.log("No button clicked!");
  };

  const handleYesClick = () => {
    // You can customize this part based on your requirements

    // Use the onYesClick callback to handle changing the backdrop to the flower gif
    onYesClick("gif1.gif");

    // Add a console log to check if the function is triggered
    console.log("Yes button clicked!");
  };

  return (
    <div className="btngrp">
      <div className="row btnspace">
        <div style={{ position: "relative", left: 0 }}>
          <button onClick={handleYesClick}>Yes</button>
        </div>
        <div
          className="no-button"
          onClick={handleNoClick}
          style={{
            ...(noClicked && {
              position: "absolute",
              left: `${noPosition.left}px`,
              top: `${noPosition.top}px`,
              padding: "5px",
              maxWidth: "100%",
              maxHeight: "100%",
              overflow: "hidden",
            }),
          }}
        >
          <button>No</button>
        </div>
      </div>
    </div>
  );
}

export default Button;

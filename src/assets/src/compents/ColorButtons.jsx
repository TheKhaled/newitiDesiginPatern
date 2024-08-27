import React, { useState } from "react";

export default function ColorButtons() {
  const [panelColor, setPanelColor] = useState("white");

  const handleGreenClick = () => {
    setPanelColor("green");
  };

  const handleRedClick = () => {
    setPanelColor("red");
  };

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: panelColor,
          marginBottom: "20px",
          transition: "background-color 0.3s ease",
        }}
      />
      <button
        onClick={handleGreenClick}
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "10px 20px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Green Button
      </button>
      <button
        onClick={handleRedClick}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Red Button
      </button>
    </div>
  );
}

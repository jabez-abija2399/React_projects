import React, { useState } from "react";

const RandomColor = () => {
  const [hexColor, setHexColor] = useState("#110009");
  const [rgbColor, setRgbColor] = useState("rgb(0,0,0)");
  const [colorType, setColorType] = useState(hexColor);

 const handleHexRandom = () => {
    let hex = "#";
    const letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    setHexColor(hex);
  };

 const handleRgbRandom = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setRgbColor(`rgb(${r},${g},${b})`);
  };

 const handleButton = () => {
    {colorType === hexColor ? handleHexRandom() : handleRgbRandom()}


  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: colorType,
      }}
    >
      <div style={{ color: "white" }}>Random Color Generator.</div>
      <button onClick={() => setColorType(hexColor)}>Hex</button>
      <button onClick={() => setColorType(rgbColor)}>RGB</button>
      <button onClick={handleButton}>Generate</button>
      <div>Color: {colorType === "hex" ? hexColor : rgbColor}</div>
    </div>
  );
};

export default RandomColor;

import React, { useState } from "react";

const RandomColor = () => {
  const [hexColor, setHexColor] = useState("#110009"); // Default Hex color
  const [rgbColor, setRgbColor] = useState("rgb(0,0,0)"); // Default RGB color
  const [colorType, setColorType] = useState("hex"); // "hex" or "rgb"

  // Generate a random Hex color
  const handleHexRandom = () => {
    let hex = "#";
    const letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    setHexColor(hex);
    setColorType("hex"); // Change the background to hex
  };

  // Generate a random RGB color
  const handleRgbRandom = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setRgbColor(`rgb(${r},${g},${b})`);
    setColorType("rgb"); // Change the background to rgb
  };

  // Handle button click to generate random color
  const handleButton = () => {
    if (colorType === "hex") {
      handleHexRandom();
    } else {
      handleRgbRandom();
    }

    // colorType === hex ? handleHexRandom : handleRgbRandom

  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: colorType === "hex" ? hexColor : rgbColor,
      }}
    >
      <div style={{ color: "white" }}>Random Color Generator</div>
      <button onClick={() => setColorType("hex")}>Hex</button>
      <button onClick={() => setColorType("rgb")}>RGB</button>
      <button onClick={handleButton}>Generate</button>
      <div style={{ color: "white", alignContent: "center",  margin: "100px"}}>
        <h1>Color Type: {colorType} </h1>
        {colorType === "hex" ? hexColor : rgbColor}
      </div>
    </div>
  );
};

export default RandomColor;

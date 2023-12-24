import React from "react";

const CanvaTools = ({ penColor, setPenColor }) => {
  const handleOnColorChange = (e) => {
    setPenColor(e.target.value);
  };

  return (
    <div id="canva-tool-container">
      <span
        className="canva-tool"
        style={{
          backgroundColor: penColor,
        }}
      >
        <label
          title="change color"
          htmlFor="color-palette"
          style={{ backgroundColor: penColor }}
        >
          <input
            title="change color"
            type="color"
            id="color-palette"
            name="color-palette"
            onChange={handleOnColorChange}
            value={penColor}
          />
          <i
            className="fa-solid fa-pen"
            style={{
              color: "white",
              backgroundColor: "inherit",
            }}
          ></i>
        </label>
      </span>
    </div>
  );
};

export default CanvaTools;

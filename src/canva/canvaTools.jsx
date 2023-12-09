import React from "react";
import { useTheme } from "../context/theme";

const CanvaTools = ({ isPenActive, setPenActive, penColor, setPenColor }) => {
  const { isDark } = useTheme();
  const handleOnColorChange = (e) => {
    setPenColor(e.target.value);
  };

  return (
    <div id="canva-tool-container">
      <span
        className="canva-tool"
        style={{
          backgroundColor: isPenActive
            ? penColor
            : isDark
            ? "#ffffff"
            : "#020617",
        }}
        onClick={() => setPenActive((prev) => !prev)}
      >
        <i
          className="fa-solid fa-pen"
          style={{
            color: isPenActive ? "white" : isDark ? "#020617" : "#ffffff",
            backgroundColor: "inherit",
          }}
        ></i>
      </span>
      <span className="canva-tool">
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
        </label>
      </span>
    </div>
  );
};

export default CanvaTools;

import React, { useState, useRef } from "react";
import CanvaTools from "./canvaTools";
import { Stage, Layer, Line } from "react-konva";
let timoutId;
const Canva = () => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [penColor, setPenColor] = useState("#ca8a04");

  const handleMouseDown = (e) => {
    clearTimeout(timoutId);
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool: "pen", points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = (e) => {
    isDrawing.current = false;
    timoutId = setTimeout(() => {
      setLines([]);
    }, 3000);
  };

  return (
    <>
      <CanvaTools penColor={penColor} setPenColor={setPenColor} />
      <div
        id="canva"
        style={{
          position: "fixed",
          zIndex: "1",
          backgroundColor: "transparent",
        }}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
          //   onTouchStart={handleMouseDown}
          //   onTouchMove={handleMouseMove}
          //   onTouchEnd={handleMouseUp}
        >
          <Layer>
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={penColor}
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  line.tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Canva;

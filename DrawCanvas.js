import { useEffect, useState, useRef, useImperativeHandle } from "react";
import Canvas from "react-canvas-polygons";

const toolOptions = [
  { value: "Point", label: "Point" },
  { value: "Line", label: "Line" },
  { value: "Polygon", label: "Polygon" },
];

const DrawCanvas = ({ initialData, onChange, forwardRef , tool}) => {
  const canvasRef = useRef(null);

  const handleCleanCanvas = (e) => {
    e.stopPropagation();
    forwardRef.current.cleanCanvas();
  };

  useImperativeHandle(forwardRef, () => ({
    cleanCanvas: () => canvasRef.current.cleanCanvas(),
  }), [canvasRef]);

  return (
    <div id="main">
      <button
        variant="outlined"
        style={{ marginBottom: "0px" }}
        onClick={handleCleanCanvas}
      >
        Clean Canvas
      </button>
      <Canvas
        ref={canvasRef}
        height={800}
        width={800}
        tool={tool}
        onDataUpdate={(data) => onChange(data)}
        onFinishDraw={() => console.log("finish draw")}
        initialData={initialData}
      />
    </div>
  );
};

export default DrawCanvas;

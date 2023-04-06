import React, { useState, useRef } from "react";
import DrawCanvas from "./DrawCanvas";
import Dropdown from "./Dropdown";

const toolOptions = [
  { value: "Point", label: "Point" },
  { value: "Line", label: "Line" },
  { value: "Polygon", label: "Polygon" },
];


function Grid({ children }) {
  const [points, setPoints] = useState({});
  const [tool, setTool] = useState("Polygon");
  const drawCanvasRef = useRef(null);

  const handleUndo = () => {
    const canvas = drawCanvasRef.current;
    canvas.undo();
  };

  const handleToolChange = (selectedOption) => {
    setTool(selectedOption.value);
  };


  return (
    <div>
      <Dropdown
        options={toolOptions}
        value={toolOptions.find((option) => option.value === tool)}
        onChange={handleToolChange}
      />
      <DrawCanvas
        onDataUpdate={(data) => setPoints(data)}
        initialData={points[tool]}
        tool={tool}
        // onChange={(data) => setPoints({ ...points, [tool]: data })}
        onChange={(selectedOption) => handleToolChange(selectedOption)}
        forwardRef={drawCanvasRef}
      />
      {children}
    </div>
  );
}

export default Grid;

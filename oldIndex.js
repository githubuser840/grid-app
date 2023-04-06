import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CanvasDraw from "react-canvas-draw";
import { useEffect, useState, useRef } from "react";
import DrawCanvas from './DrawCanvas'

import { Rnd } from "react-rnd";
import classNames from "./index.css";

function Grid() {
  // const [color, setColor] = useState("#blue");
  // const [brushRadius, setBrushRadius] = useState(2);
  // const [lazyRadius, setLazyRadius] = useState(0);
  const [points, setPoints] = useState();
  const canvasRef = useRef(null);

  const onChange = (data) => {
    setPoints(data);
    console.log(points);
  };

  return (
    <React.StrictMode>
      <div className="dropdown">
        <ul>
          <li className="dropdown-menu"> Target
              <ul className="dropdown-content">
                <li> Person </li>
                <li> Vehicle </li>
                <li> Other </li>
              </ul>
          </li>

          <li className="dropdown-menu"> Grid
              <ul className="dropdown-content">
                <li> Point </li>
                <li> Line </li>
                <li> Polygon </li>
              </ul>
          </li>

          <li className="dropdown-menu"> More
            <ul className="dropdown-content">

              <li> Drone Start Position </li>

              <li className="dropdown-submenu"> Keep Out Zones 
                <ul className="dropdown-content">
                  <li> Point </li>
                  <li> Line </li>
                  <li> Polygon </li>
                </ul>
              </li>

              <li className="dropdown-submenu"> Search Boundaries 
                <ul className="dropdown-content">
                  <li> Point </li>
                  <li> Line </li>
                  <li> Polygon </li>
                </ul>
              </li>
              
            </ul>
          </li>

          <li id="undo-button"> 
            <button
              onClick={() => {
                canvasRef.current.undo();
              }}
            >
              undo
            </button>
          </li>
        </ul>
      </div>
      
    
      <div id="main">
        <DrawCanvas 
          initialData={points} 
          onChange={onChange} 
          canvasRef={canvasRef}
          style={{ position: "absolute", top: 0, left: 0 }} // Position the DrawCanvas component at the top-left corner
        />
      </div>

    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Grid />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

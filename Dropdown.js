import React from "react";
import Canvas from "react-canvas-polygons";

function Dropdown(props) {
  return (
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
            <li onClick={() => props.onChange("Point")}> Point </li>
            <li onClick={() => props.onChange("Line")}> Line </li>
            <li onClick={() => props.onChange("Polygon")}> Polygon </li>
          </ul>
        </li>
  
        <li className="dropdown-menu"> More
          <ul className="dropdown-content">
  
            <li> Drone Start Position </li>
  
            <li className="dropdown-submenu"> Keep Out Zones 
              <ul className="dropdown-content">
                <li onClick={() => props.onChange("Point")}> Point </li>
                <li onClick={() => props.onChange("Line")}> Line </li>
                <li onClick={() => props.onChange("Polygon")}> Polygon </li>
              </ul>
            </li>
  
            <li className="dropdown-submenu"> Search Boundaries 
              <ul className="dropdown-content">
                <li onClick={() => props.onChange("Point")}> Point </li>
                <li onClick={() => props.onChange("Line")}> Line </li>
                <li onClick={() => props.onChange("Polygon")}> Polygon </li>
              </ul>
            </li>
                
          </ul>
        </li>
  
        <li id="undo-button"> 
          <button>undo</button>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;

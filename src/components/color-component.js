import React, { useState } from "react";
import Color from "./random-color";

const ColorComponent = () => {
  const [color, setColor] = useState("black");

  const randomColor = () => {
    return "#" + Math.random().toString(16).substr(-6);
  };

  const randomCol = () => {
    setColor(randomColor());
  };

  return (
    <div>
      <Color color={color}>
        <input type={"button"} value={"random color"} onClick={randomCol} />
      </Color>
    </div>
  );
};

export default ColorComponent;

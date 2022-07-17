import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrencolor, setChildrenColor] = useState("#FFF");




  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(randomColor);
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrencolor} onChangeColor={handleChangeColor} />
      <Child color={childrencolor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;

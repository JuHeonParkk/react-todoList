import React, { useState } from "react";
import Modal from "./Modal";

export default function ColorList({ color, setColor }) {
  const colors = [
    "#FA5242",
    "#F08080",
    "#FFB13D",
    "#68D48F",
    "#357454",
    "#ADD8E6",
    "#588BE4",
    "#34479D",
    "#d3bbe2",
    "#A470CC",
  ];

  // 선택된 색상 표시
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-2">
      {colors.map((color) => (
        <button
          className={`w-8 h-8 rounded-full cursor-pointer m-1.5
          ${
            selectedColor === color
              ? "border-white border-2 outline outline-2 outline-gray-400"
              : ""
          }`}
          key={color}
          style={{
            backgroundColor: color,
          }}
          onClick={() => {
            setColor(color);
            setSelectedColor(color);
          }}
        ></button>
      ))}
    </div>
  );
}

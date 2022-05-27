import React from "react";

const Button = ({ color, bgColor, text, borderRadius, size, width }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl transition-all duration-150 ${
        width ? `w-${width}` : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;

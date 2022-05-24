import React from "react";

const Button = ({ color, bgColor, text, borderRadius, size }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl transition-all duration-150`}
    >
      {text}
    </button>
  );
};

export default Button;

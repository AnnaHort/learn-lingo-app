import React from "react";
import "./closeSvg.scss";

export const CloseSvg = ({onClick}) => {
  return (
    <div className="close-svg-container" onClick={onClick}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 8L8 24"
          stroke="#121417"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8L24 24"
          stroke="#121417"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

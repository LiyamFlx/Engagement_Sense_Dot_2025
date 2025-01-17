import React, { useEffect, useState } from "react";
import { calculateDotPosition } from "../utils/engagementMath";
import "./dot.css";

const Dot = ({ engagementData }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setPosition(calculateDotPosition(engagementData));
  }, [engagementData]);

  return (
    <div
      className="dot"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    ></div>
  );
};

export default Dot;

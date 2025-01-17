import React from "react";
import "./circle.css";
import Dot from "./Dot";

const Circle = ({ engagementData }) => {
  return (
    <div className="circle-container">
      <div className="circle">
        <div className="quadrant physical">Physical</div>
        <div className="quadrant emotional">Emotional</div>
        <div className="quadrant mental">Mental</div>
        <div className="quadrant spiritual">Spiritual</div>
        <Dot engagementData={engagementData} />
      </div>
    </div>
  );
};

export default Circle;

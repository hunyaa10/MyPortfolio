import React from "react";
import "../../style/lineStyle.css";

const DividingLine = ({ isInView }) => {
  return (
    <div className="divide_line-box">
      <span className="divide_line" />
      <span
        className={`divide_line-hide ${isInView ? "animated-divide_line" : ""}`}
      />
    </div>
  );
};

export default DividingLine;

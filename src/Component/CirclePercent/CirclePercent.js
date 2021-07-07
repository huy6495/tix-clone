import React from "react";
import "./CirclePercent.css";

export default function CirclePercent(props) {
  return (
    <div className={`c100 big dark orange p${props.percent}`}>
      <span>{props.percent}%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
  );
}

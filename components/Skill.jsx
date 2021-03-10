import React from "react";

export default function Skill({ title, progress, color }) {
  return (
    <div className="skill">
      <h3>{title}</h3>
      <div className="progressBar">
        <div
          className="fillbar"
          style={{ width: `${progress}%`, backgroundColor: color }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}

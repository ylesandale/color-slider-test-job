import React from "react";
import { useSelector } from "react-redux";

function textArea() {
  const colors = useSelector(({ colors }) => colors);

  return (
    <div
      style={{ backgroundColor: colors.backgroundColor.color }}
      className="text-area"
    >
      <p style={{ color: colors.color.color }}>
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
      </p>
    </div>
  );
}

export default textArea;

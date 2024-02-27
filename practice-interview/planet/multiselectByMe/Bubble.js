import React from "react";

const Bubble = ({ data }) => {
  console.log("data ", data);
  return (
    <div
      style={{ display: "flex", gap: "5px", justifyContent: "space-between" }}>
      {data.map((val) => (
        <div
          style={{
            borderRadius: "25%",
            padding: "6px 5px",
            border: "1px solid red",
          }}>
          <span>{val.value}</span>
          <span>x</span>
        </div>
      ))}
    </div>
  );
};

export default Bubble;

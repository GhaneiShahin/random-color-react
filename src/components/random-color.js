import React from "react";

const Color = ({ color, children }) => {
  const style = {
    padding: 20,
    textAlign: "center",
    color: "white",
    backgroundColor: color
  };

  return <div style={style}>{children}</div>;
};

export default Color;

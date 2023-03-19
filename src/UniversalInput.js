import React from "react";

function UniversalInput({ inputType }) {
  const getType = () => {
    if (
      inputType !== "number" &&
      inputType !== "text" &&
      inputType !== "email"
    ) {
      return "range";
    } else return inputType;
  };
  return <input type={getType()} />;
}

export default UniversalInput;

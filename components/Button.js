import React from "react";

function Button({ OnClick, Text }) {
  return (
    <div>
      <button onClick={OnClick}>{Text}</button>
    </div>
  );
}

export default Button;
